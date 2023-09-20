import React from 'react';

interface Token {
    id: number;
    name: string;
}

interface TokenListProps {
    tokens: Token[];
}

const TokenList: React.FC<TokenListProps> = (tokens) => {
    return (
        <div className="row mt-lg-4 mt-2">
            <div className="col-lg-12">
                <div className="card rounded shadow bg-light border-0">
                    <div className="card-body py-5">
                        {/*<img src="assets/images/payments/payment/master.png" height="60" className="text-end" alt=""/>*/}
                        <form className="">
                            <div className="">
                                <h5>Transfer Tokens</h5>
                                <div className="form-icon position-relative mb-3">
                                    <label className="form-label">Recipient Address</label>
                                    <input name="recipient" id="recipient" type="text" className="form-control"
                                           placeholder="Recipient Address :" required/>
                                </div>
                                <div className="form-icon position-relative mb-3">
                                    <label className="form-label">Token Value</label>
                                    <input name="tokens" id="recipient" type="number" className="form-control"
                                           placeholder="Token Value :" required/>
                                </div>
                                <div className="form-icon position-relative d-flex justify-content-end">
                                    <button className="btn btn-primary submitBnt" type="submit"
                                            id="transfer">Transfer
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
