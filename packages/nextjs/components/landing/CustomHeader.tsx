import React from "react";
import {RainbowKitCustomConnectButton} from "~~/components/scaffold-eth";

const CustomHeader: React.FC = () => {
    const toggleMenu = () => {
        const toggleElement = document.getElementById('isToggle');
        const navigationElement = document.getElementById('navigation');

        if (toggleElement && navigationElement) {
            toggleElement.classList.toggle('open');

            if (navigationElement.style.display === 'block') {
                navigationElement.style.display = 'none';
            } else {
                navigationElement.style.display = 'block';
            }
        }
    };

    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <div className="container">
                    <a className="logo" href="/">
                        <img src="assets/images/logo-color.png" height="45" className="logo-light-mode" alt=""/>
                        <img src="assets/images/logo-light.png" height="45" className="logo-dark-mode" alt=""/>
                    </a>

                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item mb-0">
                            <RainbowKitCustomConnectButton/>
                        </li>
                    </ul>


                    <div id="navigation">
                        <ul className="navigation-menu">
                            <li><a href="/" className="sub-menu-item">Home</a></li>
                            <li><a href="index.html" className="sub-menu-item">Features</a></li>
                            <li className="has-submenu parent-parent-menu-item">
                                <a href="">Docs</a><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li><a href="documentation.html" className="sub-menu-item">Documentation</a></li>
                                    <li><a href="changelog.html" className="sub-menu-item">Changelog</a></li>
                                    <li><a href="widget.html" className="sub-menu-item">Widget</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
};

export default CustomHeader;
