import React from "react";

const TokenList: React.FC = () => {
  return (
    <div className="row">
      <div className="row mb-4" id="counter">
        <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
          <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
            <div className="card-body">
              <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                <i className="uil uil-bitcoin-circle text-primary" />
              </div>
              <div className="content mt-3">
                <h4 className="mb-0">
                  <span className="counter-value" data-target="1154">
                    1154
                  </span>
                  K +
                </h4>
                <h6 className="mb-0 text-muted">Tokens</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2">
          <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
            <div className="card-body">
              <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                <i className="uil uil-users-alt text-primary" />
              </div>
              <div className="content mt-3">
                <h4 className="mb-0">
                  <span className="counter-value" data-target="111">
                    111
                  </span>{" "}
                  +
                </h4>
                <h6 className="mb-0 text-muted">Tokens Sent</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card rounded shadow bg-light border-0">
            <div className="card-body py-5">
              <form className="">
                <div className="">
                  <h5>Transfer Tokens</h5>
                  <div className="form-icon position-relative mb-3">
                    <label className="form-label">Recipient Address</label>
                    <input
                      name="recipient"
                      id="recipient"
                      type="text"
                      className="form-control"
                      placeholder="Recipient Address :"
                      required
                    />
                  </div>
                  <div className="form-icon position-relative mb-3">
                    <label className="form-label">Token Value</label>
                    <input
                      name="tokens"
                      id="recipient"
                      type="number"
                      className="form-control"
                      placeholder="Token Value :"
                      required
                    />
                  </div>
                  <div className="form-icon position-relative d-flex justify-content-end">
                    <button className="btn btn-primary submitBnt" type="submit" id="transfer">
                      Transfer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenList;
