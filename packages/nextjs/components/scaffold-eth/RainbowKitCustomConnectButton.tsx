import {ConnectButton, useAccountModal, useChainModal, useConnectModal} from "@rainbow-me/rainbowkit";
import {useDisconnect, useSwitchNetwork} from "wagmi";
import {ArrowLeftOnRectangleIcon, ArrowsRightLeftIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import {Balance, BlockieAvatar} from "~~/components/scaffold-eth";
import {useAutoConnect, useNetworkColor} from "~~/hooks/scaffold-eth";
import {getTargetNetwork} from "~~/utils/scaffold-eth";
import React, {useRef, useEffect} from "react";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
    useAutoConnect();

    const networkColor = useNetworkColor();
    const configuredNetwork = getTargetNetwork();
    const {disconnect} = useDisconnect();
    const {switchNetwork} = useSwitchNetwork();
    const {openAccountModal} = useAccountModal();
    const {openChainModal} = useChainModal();
    const dropdownRef = useRef(null);

    // useEffect(() => {
    //     const sectionNotToCloseDropdown = document.getElementById('account-info');
    //
    //     const handleClickOutside = (event: any) => {
    //         if (dropdownRef.current && sectionNotToCloseDropdown && !sectionNotToCloseDropdown.contains(event.target)) {
    //             dropdownRef.current.classList.remove('show');
    //         }
    //     };
    //
    //     window.addEventListener('click', handleClickOutside);
    //
    //     return () => {
    //         window.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    return (
        <ConnectButton.Custom>
            {({account, chain, openAccountModal, openConnectModal, mounted}) => {
                const connected = mounted && account && chain;

                return (
                    <>
                        {(() => {
                            if (!connected) {
                                return (
                                    <button className="btn btn-primary" onClick={openConnectModal} type="button">
                                        Connect Wallet
                                    </button>
                                );
                            }

                            if (chain.unsupported || chain.id !== configuredNetwork.id) {
                                return (
                                    <>
                                        <div className="dropdown dropdown-primary">
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-pills btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
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
                                                    className="feather feather-user icons"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                </svg>
                                            </button>
                                            <div
                                                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3 show"
                                                style={{
                                                    width: "200px",
                                                    position: "absolute",
                                                    inset: "0px 0px auto auto",
                                                    margin: "0px",
                                                    transform: "translate3d(0px, 38px, 0px)",
                                                }}
                                                data-popper-placement="bottom-end"
                                            >
                                                <a className="dropdown-item text-dark" href="#"
                                                   onClick={() => switchNetwork?.(configuredNetwork.id)}>
                                                    <i className="uil uil-arrow align-middle me-1"/>
                                                    <span className="whitespace-nowrap">Switch to <span
                                                        style={{color: networkColor}}>{configuredNetwork.name}</span>
                                                    </span>
                                                </a>
                                                <a className="dropdown-item text-dark" href="#"
                                                   onClick={() => disconnect()}>
                                                    <i className="uil uil-signout align-middle me-1"/>
                                                    Disconnect
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                );
                            }

                            return (
                                <>
                                    <div className="px-2 d-flex justify-content-end items-center">
                                        <div className="dropdown dropdown-primary">
                                            <button
                                                type="button"
                                                className="btn btn-icon btn-pills btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
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
                                                    className="feather feather-user icons"
                                                >
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                </svg>
                                            </button>
                                            <div
                                                className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 pt-0 pb-3"
                                                style={{
                                                    width: "200px",
                                                    position: "absolute",
                                                    inset: "0px 0px auto auto",
                                                    margin: "0px",
                                                    transform: "translate3d(0px, 38px, 0px)",
                                                }}
                                                data-popper-placement="bottom-end"
                                            >
                                                <div className="dropdown-item text-muted p-0" id="account-info"
                                                     onClick={(e) => e.stopPropagation()}>
                                                    <div
                                                        className="bg-soft-primary rounded p-2 d-flex align-items-center justify-content-center">
                                                        <div className="d-block justify-content-center">
                                                            <h6>
                                                                {account.displayName}
                                                                {account.displayBalance
                                                                ? ` (${account.displayBalance})`
                                                                : ''}
                                                            </h6>
                                                            <div className="text-muted">
                                                                <Balance address={account.address} className="btn btn-outline-light justify-content-center"/>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <a className="dropdown-item text-dark mt-3" href="/dashboard">
                                                    <i className="uil uil-user align-middle me-1"/> Dashboard
                                                </a>
                                                <a className="dropdown-item text-dark" href="#"
                                                   onClick={openChainModal}>
                                                    <i className="uil uil-clipboard-notes align-middle me-1"/>
                                                    Switch Networks
                                                </a>
                                                <a className="dropdown-item text-dark" href="#">
                                                    <i className="uil uil-arrow-circle-down align-middle me-1"/> Download
                                                </a>
                                                <div className="dropdown-divider my-3 border-top"/>
                                                <a className="dropdown-item text-dark" href="#"
                                                   onClick={openAccountModal}>
                                                    <i className="uil uil-wallet"/> Account
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </>
                );
            }}
        </ConnectButton.Custom>
    );
};
