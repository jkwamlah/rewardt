import React from "react";

const HomeSection: React.FC = () => {
    return (
        <section className="bg-half d-table w-100 overflow-hidden">
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="title-heading">
                            <h1 className="heading fw-bold mb-3">
                                Increasing the <br/> value of your life
                                <span className="typewrite" data-period="4000" data-type='[ "..." ]'/>
                            </h1>
                            <p className="para-desc text-muted">
                                Launch your campaign and benefit from our expertise on designing and managing
                                conversion-centered
                                Bootstrap v5 HTML pages.
                            </p>
                            <div className="mt-4">
                                <a href="">
                                    <img src="/assets/images/app/app.png" className="m-1" height="50" alt=""/>
                                </a>
                                <a href="">
                                    <img src="assets/images/app/playstore.png" className="m-1" height="50" alt=""/>
                                </a>
                                <ul className="list-unstyled h5 text-warning mb-0 mt-2">
                                    <li className="list-inline-item mb-0 align-middle">
                                        <i className="mdi mdi-star"/>
                                    </li>
                                    <li className="list-inline-item mb-0 align-middle">
                                        <i className="mdi mdi-star"/>
                                    </li>
                                    <li className="list-inline-item mb-0 align-middle">
                                        <i className="mdi mdi-star"/>
                                    </li>
                                    <li className="list-inline-item mb-0 align-middle">
                                        <i className="mdi mdi-star"/>
                                    </li>
                                    <li className="list-inline-item mb-0 align-middle">
                                        <i className="mdi mdi-star-half"/>
                                    </li>
                                    <li className="list-inline-item mb-0 align-middle text-muted fs-6">150+ ratings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="modern-app-bg-shape position-relative">
                            <img src="/assets/images/app/classic01.png" className="img-fluid mover mx-auto d-block"
                                 alt=""/>
                            <div className="modern-app-absolute-left">
                                <div className="card">
                                    <div
                                        className="features feature-primary d-flex justify-content-between align-items-center rounded shadow p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon bg-soft-primary text-center rounded-pill">
                                                <i className="uil uil-usd-circle fs-4 mb-0"/>
                                            </div>
                                            <div className="flex-1 ms-3">
                                                <h6 className="mb-0 text-muted">Reward</h6>
                                                <p className="fs-5 text-dark fw-bold mb-0">
                                                    <span className="counter-value" data-target="48575">968</span>
                                                    <span className="text-muted" data-target="ETH"> ETH</span>
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-success ms-4">
                                            <i className="uil uil-arrow-growth"/> 3.84%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="modern-app-absolute-right">
                                <div className="card rounded shadow">
                                    <div className="p-3">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="avatar avatar-small rounded-pill shadow-md bg-soft-primary"/>
                                            <div className="flex-1 ms-2">
                                                <h6 className="text-dark mb-0">0xF9.....4372099fe84F</h6>
                                                <p className="text-muted small mb-0">Facilitator</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute top-0 start-50 translate-middle z-index-m-1">
                                <img src="/assets/images/shapes/dots.svg" className="avatar avatar-xl-large" alt=""/>
                            </div>
                            <div className="position-absolute top-0 start-0 translate-middle">
                                <p className="avatar avatar-small bg-primary rounded-md mb-0 spin-anything"
                                   style={{opacity: 0.05}}/>
                            </div>
                            <div className="position-absolute top-100 start-100 translate-middle">
                                <p className="avatar avatar-small bg-primary rounded-pill mb-0 zoom-in-out"
                                   style={{opacity: 0.05}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
