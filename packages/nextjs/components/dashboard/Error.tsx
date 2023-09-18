import React, {FC} from 'react';
import {RainbowKitCustomConnectButton} from "~~/components/scaffold-eth";

interface ErrorProps {
    message?: string;
    authentication?: boolean;
}

const Error: FC<ErrorProps> = ({message, authentication}) => {

    return (
        <>
            <div className="back-to-home rounded d-none d-sm-block">
                <a href="#" className="back-button btn btn-icon btn-primary">
                    <i data-feather="arrow-left" className="icons"/>
                </a>
            </div>
            <section className="bg-home d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 text-center">
                            <img src="/assets/images/404.svg" className="img-fluid" alt=""/>
                            <div className="text-uppercase mt-4 display-3">Oh! no</div>
                            <div className="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                            {message && <p className="text-muted para-desc mx-auto">{message}</p>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="/" className="btn btn-primary mt-4 ms-2">
                                Go To Home
                            </a>
                            {authentication && <a href="#" className="btn btn-primary mt-4 ms-2">
                                <RainbowKitCustomConnectButton/>
                            </a>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;
