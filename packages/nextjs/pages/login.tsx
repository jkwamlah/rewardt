import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";

const Login = () => {
    const [isConnected, setIsConnected] = useState(false)

    const getProviderConnectionStatus = () => {
        return typeof window.ethereum !== 'undefined';
    };

    useEffect(() => {
        const checkConnection = () => {
            const status = getProviderConnectionStatus();
            setIsConnected(status);
        };

        const account = useAccount
        console.log('account', account)

        checkConnection();
        const intervalId = setInterval(checkConnection, 2000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>
            {/*<div id="preloader">*/}
            {/*    <div id="status">*/}
            {/*        <div className="spinner">*/}
            {/*            <div className="double-bounce1"/>*/}
            {/*            <div className="double-bounce2"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* Loader */}

            <div className="back-to-home">
                <a href="#" className="back-button btn btn-icon btn-primary">
                    <i data-feather="arrow-left" className="icons"/>
                </a>
            </div>

            {/* Hero Start */}
            <section className="bg-home d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="me-lg-5">
                                <img src="assets/images/user/login.svg" className="img-fluid d-block mx-auto" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="card shadow-md login-page shadow rounded border-0">
                                <div className="card-body" style={{minHeight: 100}}>
                                    <div className="card-title mt-4">
                                        <img src="assets/images/rewardt.svg" className="img-fluid d-block mx-auto"
                                             style={{height: 30}} alt=""/>
                                    </div>
                                    <form className="login-form mt-4">
                                        <div className="row">
                                            <div className="col-lg-12 my-4 text-center">
                                                <div className="row">
                                                    {!isConnected && <p class="text-muted mx-auto">
                                                        Do more by connecting your wallet and gain access to the your
                                                        personalized dashboard.
                                                    </p>}
                                                    <div className="d-flex justify-content-center">
                                                        <ConnectButton
                                                            chainStatus="icon"
                                                            accountStatus={{
                                                                smallScreen: 'avatar',
                                                                largeScreen: 'full',
                                                            }}
                                                            showBalance={{
                                                                smallScreen: false,
                                                                largeScreen: true,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row my-5">
                                                    <div className="col-6">
                                                        <div className="d-grid">
                                                            <a href="/"
                                                               className="btn btn-outline-primary">
                                                                <i className="mdi mdi-facebook text-primary"/> Home
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="d-grid">
                                                            <a href="/dashboard" className="btn btn-primary">
                                                                <i className="mdi mdi-google text-danger"/> Dashboard
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
