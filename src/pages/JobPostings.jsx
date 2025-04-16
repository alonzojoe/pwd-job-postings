import Avatar from "@/assets/images/avatar.jpeg";

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
                  <li
                    className="nav-item dropdown-language dropdown me-2 me-xl-0"
                    id="user-name"
                  >
                    <span className="nav-link hide-arrow">
                      <h5 className="mt-3 fw-bolder">JUAN DELA CRUZ</h5>
                    </span>
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
                          src={Avatar}
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
                                  src={Avatar}
                                  alt=""
                                  className="h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-medium d-block">
                                John Doe
                              </span>
                              <small className="text-muted">
                                Hearing Disability
                              </small>
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
