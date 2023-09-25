import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getErrorMessage } from "~~/plugins/common";

interface ProgramJoinProps {
  resourceCreated: (type: string, blockHash: string) => void;
}

const ProgramJoin: React.FC<ProgramJoinProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    externalId: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const contract = useScaffoldContractWrite({
    contractName: "ClassReward",
    functionName: "join",
    blockConfirmations: 1,
    args: [formData.externalId, formData.name],
    mode: undefined,
    onBlockConfirmation: () => {
      setAlertType("info");
      setShowAlert(true);
      setAlertMessage(`Hurraayy! You are now a participant of this program.}`);
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
      args: [formData.externalId, formData.name],
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
            className="btn btn-soft btn-close"
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
            <div className="row mt-4">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Program Code</label>
                  <div className="form-icon position-relative">
                    <i data-feather="clipboard" className="fea icon-sm icons" />
                    <input
                      name="externalId"
                      id="externalId"
                      type="text"
                      className="form-control ps-5"
                      placeholder="Program Code :"
                      value={formData.externalId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <div className="form-icon position-relative">
                    <i data-feather="user" className="fea icon-sm icons" />
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control ps-5"
                      placeholder="Name :"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-end">
                <input type="submit" id="submit" className="btn btn-primary" value="Join" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramJoin;
