import React, {useEffect, useState} from "react";
import CustomHead from "~~/components/landing/CustomHead";
import CustomHeader from "~~/components/landing/CustomHeader";
import CustomFooter from "~~/components/landing/CustomFooter";

export default function Layout({children}: { children: React.ReactNode }) {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            setIsConnected(true);
        } else {
            setIsConnected(false);
        }
    }, []);

    return (
        <div>
            {isConnected ? (
                <div>
                    <CustomHead/>
                    <div data-topbar="dark" data-layout="vertical">
                        <span className="modern-app-round top-50 start-50 translate-middle"/>
                        <CustomHeader/>
                        <div id="layout-wrapper">
                            {children}
                        </div>
                        {/*<CustomFooter/>*/}
                    </div>
                </div>
            ) : (<div id="layout-wrapper">Connect Your Wallet</div>)}
        </div>
    );
}
