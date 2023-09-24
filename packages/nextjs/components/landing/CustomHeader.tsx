import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomHeader: React.FC = () => {
  const toggleMenu = () => {
    const toggleElement = document.getElementById("isToggle");
    const navigationElement = document.getElementById("navigation");

    if (toggleElement && navigationElement) {
      toggleElement.classList.toggle("open");

      if (navigationElement.style.display === "block") {
        navigationElement.style.display = "none";
      } else {
        navigationElement.style.display = "block";
      }
    }
  };

  return (
    <>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <Link className="logo" href="/">
            <Image src="assets/images/logo-color.png" height="45" className="logo-light-mode" alt="" />
            <Image src="assets/images/logo-light.png" height="45" className="logo-dark-mode" alt="" />
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0">
              <Link href="/login" className="btn btn-primary">
                Login
              </Link>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <Link href="/" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="sub-menu-item">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="sub-menu-item">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default CustomHeader;
