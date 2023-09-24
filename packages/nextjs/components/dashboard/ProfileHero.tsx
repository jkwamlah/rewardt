import React from "react";
import Image from "next/image";

const ProfileHero: React.FC = () => {
  return (
    <section className="bg-profile d-table w-100" style={{ background: "url('assets/images/account/bg.png') center" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card public-profile border-0 rounded shadow" style={{ zIndex: 1 }}>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-md-3 text-md-start text-center">
                    <Image
                      src="/assets/images/account/bg.png"
                      className="avatar avatar-large rounded-circle shadow d-block mx-auto"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-10 col-md-9">
                    <div className="row align-items-end">
                      <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                        <h3 className="title mb-0">0x0938232ee</h3>
                        <small className="text-muted h6 me-2">0ETH</small>
                      </div>
                      <div className="col-md-5 text-md-end text-center">
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="rounded"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              aria-label="Add Friend"
                              data-bs-original-title="Add Friend"
                            >
                              <i className="uil uil-user-plus align-middle" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="rounded"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              aria-label="Messages"
                              data-bs-original-title="Messages"
                            >
                              <i className="uil uil-comment align-middle" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="rounded"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              aria-label="Notifications"
                              data-bs-original-title="Notifications"
                            >
                              <i className="uil uil-bell align-middle" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="rounded"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              aria-label="Settings"
                              data-bs-original-title="Settings"
                            >
                              <i className="uil uil-cog align-middle" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
