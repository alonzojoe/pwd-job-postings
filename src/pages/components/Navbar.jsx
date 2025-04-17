import { Link } from "react-router-dom";
import Avatar from "@/assets/images/avatar.jpeg";

const Navbar = () => {
  return (
    <nav
      className="nav-main layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="container-xxl">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <div className="navbar-brand app-brand demo d-xl-flex py-0 me-4 d-none d-lg-flex">
            <Link to="/" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <svg
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                    fill="#7367F0"
                  ></path>
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                    fill="#161616"
                  ></path>
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                    fill="#161616"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                    fill="#7367F0"
                  ></path>
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bold">
                JobAbility Match
              </span>
            </Link>
          </div>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li
              className="nav-item nav-username dropdown-language dropdown me-2 me-xl-0"
              id="user-name"
            >
              <span className="nav-link hide-arrow">
                <h5 className="mt-3 fw-bolder">JUAN DELA CRUZ</h5>
              </span>
            </li>

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <span
                className="nav-link dropdown-toggle hide-arrow cursor-pointer"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img src={Avatar} alt="" className="h-auto rounded-circle" />
                </div>
              </span>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
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
                          JUAN DELA CRUZ
                        </span>
                        <small className="text-muted">Hearing Disability</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="ti ti-user-check me-2 ti-sm"></i>
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="ti ti-settings me-2 ti-sm"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="#" target="_blank">
                    <i className="ti ti-logout me-2 ti-sm"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
