import React from "react";

const JobPostings = () => {
  return (
    <>
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <nav
            className="nav-main layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="container-xxl">
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a
                  className="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-menu-2 ti-sm"></i>
                </a>
              </div>

              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/* <!-- Language --> */}
                  <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-language rounded-circle ti-md"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item selected"
                          href="javascript:void(0);"
                          data-language="en"
                        >
                          <span className="align-middle">English</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="fr"
                        >
                          <span className="align-middle">French</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="de"
                        >
                          <span className="align-middle">German</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="pt"
                        >
                          <span className="align-middle">Portuguese</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ Language -->

                <!-- Search --> */}
                  <li className="nav-item navbar-search-wrapper me-2 me-xl-0">
                    <a
                      className="nav-link search-toggler"
                      href="javascript:void(0);"
                    >
                      <i className="ti ti-search ti-md"></i>
                    </a>
                  </li>
                  {/* <!-- /Search -->

                <!-- Style Switcher --> */}
                  <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-md ti-sun"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="light"
                        >
                          <span className="align-middle">
                            <i className="ti ti-sun me-2"></i>Light
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="dark"
                        >
                          <span className="align-middle">
                            <i className="ti ti-moon me-2"></i>Dark
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-theme="system"
                        >
                          <span className="align-middle">
                            <i className="ti ti-device-desktop me-2"></i>System
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- / Style Switcher-->

                <!-- Quick links  --> */}
                  <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-layout-grid-add ti-md"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end py-0">
                      <div className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-shortcuts-add text-body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Add shortcuts"
                            data-bs-original-title="Add shortcuts"
                          >
                            <i className="ti ti-sm ti-apps"></i>
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-shortcuts-list scrollable-container ps">
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-calendar fs-4"></i>
                            </span>
                            <a
                              href="app-calendar.html"
                              className="stretched-link"
                            >
                              Calendar
                            </a>
                            <small className="text-muted mb-0">
                              Appointments
                            </small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-file-invoice fs-4"></i>
                            </span>
                            <a
                              href="app-invoice-list.html"
                              className="stretched-link"
                            >
                              Invoice App
                            </a>
                            <small className="text-muted mb-0">
                              Manage Accounts
                            </small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-users fs-4"></i>
                            </span>
                            <a
                              href="app-user-list.html"
                              className="stretched-link"
                            >
                              User App
                            </a>
                            <small className="text-muted mb-0">
                              Manage Users
                            </small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-lock fs-4"></i>
                            </span>
                            <a
                              href="app-access-roles.html"
                              className="stretched-link"
                            >
                              Role Management
                            </a>
                            <small className="text-muted mb-0">
                              Permission
                            </small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-chart-bar fs-4"></i>
                            </span>
                            <a href="index.html" className="stretched-link">
                              Dashboard
                            </a>
                            <small className="text-muted mb-0">
                              User Profile
                            </small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-settings fs-4"></i>
                            </span>
                            <a
                              href="pages-account-settings-account.html"
                              className="stretched-link"
                            >
                              Setting
                            </a>
                            <small className="text-muted mb-0">
                              Account Settings
                            </small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-help fs-4"></i>
                            </span>
                            <a href="pages-faq.html" className="stretched-link">
                              FAQs
                            </a>
                            <small className="text-muted mb-0">
                              FAQs &amp; Articles
                            </small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-square fs-4"></i>
                            </span>
                            <a
                              href="modal-examples.html"
                              className="stretched-link"
                            >
                              Modals
                            </a>
                            <small className="text-muted mb-0">
                              Useful Popups
                            </small>
                          </div>
                        </div>
                        <div
                          className="ps__rail-x"
                          style={{ left: "0px", bottom: "0px" }}
                        >
                          <div
                            className="ps__thumb-x"
                            tabIndex="0"
                            style={{ left: "0px", width: "0px" }}
                          ></div>
                        </div>
                        <div
                          className="ps__rail-y"
                          style={{ top: "0px", right: "0px" }}
                        >
                          <div
                            className="ps__thumb-y"
                            tabIndex="0"
                            style={{ top: "0px", height: "0px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <!-- Quick links -->

                <!-- Notification --> */}
                  <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell ti-md"></i>
                      <span className="badge bg-danger rounded-pill badge-notifications">
                        5
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end py-0">
                      <li className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h5 className="text-body mb-0 me-auto">
                            Notification
                          </h5>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-all text-body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Mark all as read"
                            data-bs-original-title="Mark all as read"
                          >
                            <i className="ti ti-mail-opened fs-4"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list scrollable-container ps">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/1.png"
                                    alt=""
                                    className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">
                                  Congratulation Lettie 🎉
                                </h6>
                                <p className="mb-0">
                                  Won the monthly best seller gold badge
                                </p>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-danger">
                                    CF
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">Charles Franklin</h6>
                                <p className="mb-0">Accepted your connection</p>
                                <small className="text-muted">12hr ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/2.png"
                                    alt=""
                                    className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">New Message ✉️</h6>
                                <p className="mb-0">
                                  You have new message from Natalie
                                </p>
                                <small className="text-muted">1h ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-success">
                                    <i className="ti ti-shopping-cart"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">
                                  Whoo! You have new order 🛒
                                </h6>
                                <p className="mb-0">
                                  ACME Inc. made new order $1,154
                                </p>
                                <small className="text-muted">1 day ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/9.png"
                                    alt=""
                                    className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">
                                  Application has been approved 🚀
                                </h6>
                                <p className="mb-0">
                                  Your ABC project application has been
                                  approved.
                                </p>
                                <small className="text-muted">2 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-success">
                                    <i className="ti ti-chart-pie"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">
                                  Monthly report is generated
                                </h6>
                                <p className="mb-0">
                                  July monthly financial report is generated
                                </p>
                                <small className="text-muted">3 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/5.png"
                                    alt=""
                                    className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">
                                  Send connection request
                                </h6>
                                <p className="mb-0">
                                  Peter sent you connection request
                                </p>
                                <small className="text-muted">4 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <img
                                    src="../../assets/img/avatars/6.png"
                                    alt=""
                                    className="h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">New message from Jane</h6>
                                <p className="mb-0">
                                  Your have new message from Jane
                                </p>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className="avatar-initial rounded-circle bg-label-warning">
                                    <i className="ti ti-alert-triangle"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1">CPU is running high</h6>
                                <p className="mb-0">
                                  CPU Utilization Percent is currently at
                                  88.63%,
                                </p>
                                <small className="text-muted">5 days ago</small>
                              </div>
                              <div className="flex-shrink-0 dropdown-notifications-actions">
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-read"
                                >
                                  <span className="badge badge-dot"></span>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-archive"
                                >
                                  <span className="ti ti-x"></span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div
                          className="ps__rail-x"
                          style={{ left: "0px", bottom: "0px" }}
                        >
                          <div
                            className="ps__thumb-x"
                            tabIndex="0"
                            style={{ left: "0px", width: "0px" }}
                          ></div>
                        </div>
                        <div
                          className="ps__rail-y"
                          style={{ top: "0px", right: "0px" }}
                        >
                          <div
                            className="ps__thumb-y"
                            tabIndex="0"
                            style={{ top: "0px", height: "0px" }}
                          ></div>
                        </div>
                      </li>
                      <li className="dropdown-menu-footer border-top">
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center"
                        >
                          View all notifications
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ Notification -->

                <!-- User --> */}
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="../../assets/img/avatars/1.png"
                          alt=""
                          className="h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-account.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt=""
                                  className="h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-medium d-block">
                                John Doe
                              </span>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-profile-user.html"
                        >
                          <i className="ti ti-user-check me-2 ti-sm"></i>
                          <span className="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-account.html"
                        >
                          <i className="ti ti-settings me-2 ti-sm"></i>
                          <span className="align-middle">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-billing.html"
                        >
                          <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                            <span className="flex-grow-1 align-middle">
                              Billing
                            </span>
                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">
                              2
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-faq.html">
                          <i className="ti ti-help me-2 ti-sm"></i>
                          <span className="align-middle">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-pricing.html">
                          <i className="ti ti-currency-dollar me-2 ti-sm"></i>
                          <span className="align-middle">Pricing</span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="auth-login-cover.html"
                          target="_blank"
                        >
                          <i className="ti ti-logout me-2 ti-sm"></i>
                          <span className="align-middle">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ User --> */}
                </ul>
              </div>

              {/* <!-- Search Small Screens --> */}
              <div className="navbar-search-wrapper search-input-wrapper container-xxl d-none">
                <input
                  type="text"
                  className="form-control search-input border-0 container-xxl"
                  placeholder="Search..."
                  aria-label="Search..."
                />
                <i className="ti ti-x ti-sm search-toggler cursor-pointer"></i>
              </div>
            </div>
          </nav>

          <div class="layout-page">
            <div class="content-wrapper container-wrap">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div className="chat-history-footer shadow-sm search-container shadow-lg mb-5">
                  <form className="form-send-message d-flex justify-content-between align-items-center">
                    <input
                      className="form-control message-input border-0 me-3 shadow-none fs-5"
                      placeholder="Search Job Title, keywords or company"
                    />
                    <div className="message-actions d-flex align-items-center">
                      <button className="btn btn-primary d-flex send-msg-btn waves-effect waves-light">
                        <i className="ti ti-search me-md-1 me-0"></i>
                        <span className="align-middle d-md-inline-block d-none">
                          Search
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="d-flex align-items-center justify-content-center rec-container">
                  <h3 className="fw-bold mb-0 rec-text">Job Recommendations</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPostings;
