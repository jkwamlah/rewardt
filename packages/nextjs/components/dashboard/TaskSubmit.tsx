import React, { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import feather from "feather-icons";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getErrorMessage } from "~~/plugins/common";

interface TaskCreateProps {
  criteria: string;
  programId: number;
  taskId: number;
}

const TaskCreate: React.FC<TaskCreateProps> = ({ criteria, programId, taskId }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  const [formData, setFormData] = useState({
    url: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "categoryId" ? BigNumber.from(value) : value,
    });
  };

  const contract = useScaffoldContractWrite({
    contractName: "ClassReward",
    functionName: "submitTask",
    blockConfirmations: 1,
    args: [BigNumber.from(programId), BigNumber.from(taskId), formData.url],
    mode: undefined,
    onBlockConfirmation: txnReceipt => {
      setAlertType("info");
      setShowAlert(true);
      setAlertMessage(`Task Submitted! BlockHash: ${txnReceipt.blockHash}`);
      setLoader(false);
    },
    onError: error => {
      setAlertType("danger");
      setShowAlert(true);
      const message = getErrorMessage(error.message);
      message ? setAlertMessage(message) : setAlertMessage("An error occurred.");
      setLoader(false);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    await contract.writeAsync({
      args: [BigNumber.from(programId), BigNumber.from(taskId), formData.url],
      value: undefined,
      overrides: undefined,
    });
    setLoader(false);
  };

  return (
    <div className="col-lg-12 mt-3">
      {showAlert && (
        <div
          className={`d-flex align-items-center alert alert-dismissible fade show text-capitalize bg-soft-primary
         ${alertType === "info" ? "bg-soft-primary" : "bg-soft-danger"}'`}
          role="alert"
        >
          <span> {alertMessage}</span>
          <button
            onClick={() => setShowAlert(false)}
            type="button"
            className="btn btn-soft btn-close d-flex align-items-center"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}

      {loader && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div>
        </div>
      )}

      <div className="card border-0 rounded shadow">
        <div className="card-body">
          <form onSubmit={event => handleSubmit(event)}>
            <h5>{criteria}</h5>
            <div className="row mt-4">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Link</label>
                  <div className="form-icon position-relative">
                    <i data-feather="globe" className="fea icon-sm icons" />
                    <input
                      name="url"
                      id="url"
                      type="url"
                      className="form-control ps-5"
                      placeholder="Url :"
                      value={formData.url}
                      onChange={event => handleChange(event)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-end">
                <input type="submit" id="submit" name="send" className="btn btn-primary" value="Create" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
