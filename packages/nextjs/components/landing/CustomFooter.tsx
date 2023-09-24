import React from "react";
import Link from "next/link";
import Script from "next/script";

const CustomFooter = () => {
  return (
    <div>
      <div>
        <Link
          href="#"
          className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
        >
          <i className="uil uil-arrow-up" />
        </Link>

        <div className="fixed top-[30%] -right-2 z-50">
          <span className="relative inline-block rotate-90">
            <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
            <label
              className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
              htmlFor="chk"
            >
              <i className="uil uil-moon text-[20px] text-yellow-500" />
              <i className="uil uil-sun text-[20px] text-yellow-500" />
              <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7" />
            </label>
          </span>
        </div>

        <Script src="/assets/libs/jquery/jquery.min.js" />
        <Script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/assets/libs/tiny-slider/min/tiny-slider.js" />
        <Script src="/assets/libs/tobii/js/tobii.min.js" />
        <Script src="/assets/libs/feather-icons/feather.min.js" />
        <Script src="/assets/libs/metismenu/metisMenu.min.js" />
        <Script src="/assets/libs/simplebar/simplebar.min.js" />
        <Script src="/assets/libs/node-waves/waves.min.js" />
        <Script src="/assets/js/pages/dashboard.init.js" />
        <Script src="/assets/js/plugins.init.js" />
        <Script src="/assets/js/app.js" />
      </div>
    </div>
  );
};

export default CustomFooter;
