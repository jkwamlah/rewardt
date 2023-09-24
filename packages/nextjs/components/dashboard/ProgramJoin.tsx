import React, { useEffect, useState } from "react";
import feather from "feather-icons";

interface ProgramCreateProps {
  resourceCreated: (type: string, blockHash: string) => void;
}

const ProgramJoin: React.FC<ProgramCreateProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    externalId: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    feather.replace();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your logic to submit data to a smart contract here
    setAlertType("info");
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="col-lg-12 mt-3">
      {showAlert && (
        <div
          className={`alert alert-dismissible fade show text-capitalize 
                ${alertType === "error" ? "bg-soft-danger" : "bg-soft-primary"}`}
          role="alert"
        >
          {alertMessage}
          <button
            onClick={() => setShowAlert(false)}
            type="button"
            className="btn btn-soft btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}

      {/*<div id="preloader">*/}
      {/*    <div id="status">*/}
      {/*        <div className="spinner">*/}
      {/*            <div className="double-bounce1"/>*/}
      {/*            <div className="double-bounce2"/>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div className="card border-0 rounded shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 d-flex justify-content-end">
                <input
                  type="submit"
                  id="submit"
                  className="btn btn-primary"
                  value="Join"
                  onClick={() => {
                    setAlertMessage("We are working on it....");
                    setShowAlert(true);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramJoin;
