import React from 'react';

const Topnav = () => {
    return (
        <div className="topnav">
            <div className="container-fluid">
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                    <div className="collapse navbar-collapse" id="topnav-menu-content">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button">
                                    <i className="bx bx-home-circle me-2"/><span>Dashboards</span>
                                    <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-dashboard">
                                    <a href="index.html" className="dropdown-item">Default</a>
                                    <a href="dashboard-saas.html" className="dropdown-item">Saas</a>
                                    <a href="dashboard-crypto.html" className="dropdown-item">Crypto</a>
                                    <a href="dashboard-blog.html" className="dropdown-item">Blog</a>
                                    <a href="dashboard-job.html" className="dropdown-item">Jobs</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button">
                                    <i className="bx bx-tone me-2"></i>
                                    <span>UI Elements</span>
                                    <div className="arrow-down"></div>
                                </a>

                                <div className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl" aria-labelledby="topnav-uielement">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-alerts.html" className="dropdown-item">Alerts</a>
                                                <a href="ui-buttons.html" className="dropdown-item">Buttons</a>
                                                <a href="ui-cards.html" className="dropdown-item">Cards</a>
                                                <a href="ui-carousel.html" className="dropdown-item">Carousel</a>
                                                <a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
                                                <a href="ui-grid.html" className="dropdown-item">Grid</a>
                                                <a href="ui-images.html" className="dropdown-item">Images</a>
                                                <a href="ui-lightbox.html" className="dropdown-item">Lightbox</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-modals.html" className="dropdown-item">Modals</a>
                                                <a href="ui-offcanvas.html" className="dropdown-item">Offcanvas</a>
                                                <a href="ui-rangeslider.html" className="dropdown-item">Range Slider</a>
                                                <a href="ui-session-timeout.html" className="dropdown-item">Session Timeout</a>
                                                <a href="ui-progressbars.html" className="dropdown-item">Progress Bars</a>
                                                <a href="ui-placeholders.html" className="dropdown-item">Placeholders</a>
                                                <a href="ui-sweet-alert.html" className="dropdown-item">Sweet-Alert</a>
                                                <a href="ui-tabs-accordions.html" className="dropdown-item">Tabs & Accordions</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-typography.html" className="dropdown-item">Typography</a>
                                                <a href="ui-toasts.html" className="dropdown-item">Toasts</a>
                                                <a href="ui-video.html" className="dropdown-item">Video</a>
                                                <a href="ui-general.html" className="dropdown-item">General</a>
                                                <a href="ui-colors.html" className="dropdown-item">Colors</a>
                                                <a href="ui-rating.html" className="dropdown-item">Rating</a>
                                                <a href="ui-notifications.html" className="dropdown-item">Notifications</a>
                                                <a href="ui-utilities.html" className="dropdown-item">Utilities</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                                    <i className="bx bx-customize me-2"></i><span>Apps</span>
                                    <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-pages">
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button">
                                            <span>Calendar</span>
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-email">
                                            <a href="calendar.html" className="dropdown-item">TUI Calendar</a>
                                            <a href="calendar-full.html" className="dropdown-item">Full Calendar</a>
                                        </div>
                                    </div>
                                    <a href="chat.html" className="dropdown-item">Chat</a>
                                    <a href="apps-filemanager.html" className="dropdown-item">File Manager</a>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button">
                                            <span>Email</span>
                                            <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-email">
                                            <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                                            <a href="email-read.html" className="dropdown-item">Read Email</a>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-blog" role="button">
                                                    <span>Templates</span>
                                                    <div className="arrow-down"></div>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-blog">
                                                    <a href="email-template-basic.html" className="dropdown-item">Basic Action</a>
                                                    <a href="email-template-alert.html" className="dropdown-item">Alert Email</a>
                                                    <a href="email-template-billing.html" className="dropdown-item">Billing Email</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Topnav;
