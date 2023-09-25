import React, { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import feather from "feather-icons";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getErrorMessage } from "~~/plugins/common";

const TokenList: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  const [formData, setFormData] = useState({ recipient: "", tokens: 0 });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("info");
  const [alertMessage, setAlertMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const contract = useScaffoldContractWrite({
    contractName: "ClassReward",
    functionName: "transferTokens",
    blockConfirmations: 1,
    args: [formData.recipient, BigNumber.from(1), BigNumber.from(formData.tokens)],
    mode: undefined,
    onBlockConfirmation: txnReceipt => {
      setAlertType("info");
      setShowAlert(true);
      setAlertMessage(`Token transferred. BlockHash ${txnReceipt.blockHash}`);
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
    setFormData({
      ...formData,
      [name]: name === "tokens" ? BigNumber.from(value) : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    await contract.writeAsync({
      args: [formData.recipient, BigNumber.from(1), BigNumber.from(formData.tokens)],
      value: undefined,
      overrides: undefined,
    });
    setLoader(false);
  };

  return (
    <div>
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
      <div className="col-12">
        <div className="row mb-4" id="counter">
          <div className="col-lg-6 col-md-6 col-12 mt-2">
            <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
              <div className="card-body">
                <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                  <span className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shield fea"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                </div>
                <div className="content mt-3">
                  <h4 className="mb-0">
                    <span className="counter-value" data-target="1154">
                      1154
                    </span>
                    K +
                  </h4>
                  <h6 className="mb-0 text-muted">Sent</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mt-2">
            <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
              <div className="card-body">
                <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shield fea"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="content mt-3">
                  <h4 className="mb-0">
                    <span className="counter-value" data-target="111">
                      111
                    </span>{" "}
                    +
                  </h4>
                  <h6 className="mb-0 text-muted">Received</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 rounded shadow">
          <div className="card-body">
            <h5 className="card-title">Transfer Tokens</h5>

            <form onSubmit={event => handleSubmit(event)}>
              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Recipient</label>
                    <div className="form-icon position-relative">
                      <i data-feather="clipboard" className="fea icon-sm icons" />
                      <input
                        name="recipient"
                        id="recipient"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Address :"
                        value={formData.recipient}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Recipient</label>
                    <div className="form-icon position-relative">
                      <i data-feather="clipboard" className="fea icon-sm icons" />
                      <input
                        name="tokens"
                        id="tokens"
                        type="number"
                        className="form-control ps-5"
                        placeholder="Token Value :"
                        value={formData.tokens}
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
    </div>
  );
};

export default TokenList;
