import { Link } from "react-router-dom";
import Avatar from "@/assets/images/avatar.jpeg";
import MainLogo from "@/assets/images/logo-main.png";
import MainText from "@/assets/images/logo-text.png";
const Navbar = () => {
  return (
    <nav
      className="nav-main layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="container-xxl">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0">
          <div className="navbar-brand app-brand demo d-xl-flex py-0 me-4 d-none d-lg-flex">
            <Link to="/" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <img src={MainLogo} width="36" height="30" />
              </span>
              <span className="app-brand-text demo menu-text fw-bold">
                <img
                  src={MainText}
                  style={{
                    height: "auto",
                    width: "150px",
                  }}
                />
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
