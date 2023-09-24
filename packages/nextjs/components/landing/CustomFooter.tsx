import React from "react";
import Image from "next/image";

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-bar">
      <div className="footer-py-30">
        <div className="container text-center">
          <div className="row align-items-center justify-content-between">
            <div className="col-sm-3">
              <div className="text-sm-start">
                <a href="#" className="logo-footer">
                  <Image src="/assets/images/logo-color.png" height="30" width="100" alt="" />
                </a>
              </div>
            </div>

            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0 justify-content-end">
              <div className="text-center">
                <p className="mb-0">© {currentYear} NADABS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
