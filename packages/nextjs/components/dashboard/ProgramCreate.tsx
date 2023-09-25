import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getErrorMessage } from "~~/plugins/common";

const ProgramCreate = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  const getExternalId = (length = 2) => {
    const timestamp = new Date().getTime().toString(16);
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * randomChars.length);
      randomString += randomChars.charAt(randomIndex);
    }
    return timestamp + randomString;
  };
  const [formData, setFormData] = useState({ externalId: getExternalId(), name: "", description: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("info");
  const [alertMessage, setAlertMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const contract = useScaffoldContractWrite({
    contractName: "ClassReward",
    functionName: "createProgram",
    blockConfirmations: 1,
    args: [formData.externalId, formData.name, formData.description],
    mode: undefined,
    onBlockConfirmation: txnReceipt => {
      setAlertType("info");
      setShowAlert(true);
      setAlertMessage(`Program created with blockHash ${txnReceipt.blockHash}`);
      setLoader(false);
    },
    onError: error => {
      setLoader(false);
      setAlertType("danger");
      setShowAlert(true);
      const message = getErrorMessage(error.message);
      message ? setAlertMessage(message) : setAlertMessage("An error occurred.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    await contract.writeAsync({
      args: [formData.externalId, formData.name, formData.description],
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
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <div className="form-icon position-relative">
                    <i data-feather="clipboard" className="fea icon-sm icons" />
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

              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <div className="form-icon position-relative">
                    <i data-feather="message-circle" className="fea icon-sm icons" />
                    <textarea
                      name="description"
                      id="description"
                      rows={4}
                      className="form-control ps-5"
                      placeholder="Description :"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-end">
                <button type="submit" id="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramCreate;
