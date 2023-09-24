import React from "react";
import Link from "next/link";

const Statistics: React.FC = () => {
  return (
    <section
      className="section bg-cta"
      style={{ background: "url('/assets/images/course/bg03.jpg') center center" }}
      id="admission"
    >
      <div className="bg-overlay" />
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-7 col-12">
            <div className="section-title">
              <h4 className="title text-white mb-4">Connect Your Wallet Now</h4>
              <p className="para-desc para-dark mb-0 text-white-50">
                Launch your campaign and benefit from our expertise on designing and managing conversion centered
                bootstrap v5 html page.
              </p>
            </div>
            <div className="row" id="counter">
              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box">
                  <i className="uil uil-graduation-cap text-white-50 h2" />
                  <h2 className="mb-0 text-white mt-2">
                    <span className="counter-value" data-target={25}>
                      25
                    </span>
                    K
                  </h2>
                  <h6 className="counter-head text-white-50">Students</h6>
                </div>
              </div>
              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box">
                  <i className="uil uil-book-open text-white-50 h2" />
                  <h2 className="mb-0 text-white mt-2">
                    <span className="counter-value" data-target={70}>
                      70
                    </span>
                    +
                  </h2>
                  <h6 className="counter-head text-white-50">Programs</h6>
                </div>
              </div>
              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box">
                  <i className="uil uil-user text-white-50 h2" />
                  <h2 className="mb-0 text-white mt-2">
                    <span className="counter-value" data-target={55}>
                      55
                    </span>
                    +
                  </h2>
                  <h6 className="counter-head text-white-50">Instructors</h6>
                </div>
              </div>
              <div className="col-md-3 col-6 mt-4 pt-2">
                <div className="counter-box">
                  <i className="uil uil-english-to-chinese text-white-50 h2" />
                  <h2 className="mb-0 text-white mt-2">
                    <span className="counter-value" data-target={25}>
                      25
                    </span>
                    +
                  </h2>
                  <h6 className="counter-head text-white-50">Languages</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0">
              <div className="card-body p-md-5 p-4 rounded">
                <div className="section-title">
                  <h4 className="title mb-4">Advantages</h4>
                  <p className="text-muted para-desc mb-0">
                    Start working with <span className="text-primary fw-bold">Landrick</span> that can provide
                    everything you need to generate awareness, drive traffic, connect.
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12 mt-4">
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                        <i className="uil uil-umbrella" />
                      </div>
                      <div className="flex-1">
                        <h6 className="title text-dark mb-0">Rewards</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-4">
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                        <i className="uil uil-user" />
                      </div>
                      <div className="flex-1">
                        <h6 className="title text-dark mb-0">Tokens</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-4">
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                        <i className="uil uil-money-bill" />
                      </div>
                      <div className="flex-1">
                        <h6 className="title text-dark mb-0">Free</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-4">
                    <div className="d-flex align-items-center">
                      <div className="icon text-center rounded-circle h4 text-primary me-2 mb-0">
                        <i className="uil uil-bolt-alt" />
                      </div>
                      <div className="flex-1">
                        <h6 className="title text-dark mb-0">Speeds</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href="/login" className="btn btn-primary">
                    Connect your Wallet
                    <i className="uil uil-angle-right-b align-middle" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
