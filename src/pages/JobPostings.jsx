import Avatar from "@/assets/images/avatar.jpeg";
import Card from "@/components/Card";
import { useState } from "react";

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPostings = [
    {
      id: 1,
      title: "Food Crew",
      company: "Jollibee Food Corporation",
      location: "Dolores, City of San Fernando Pampanga",
      vacantPositions: 3,
      applicableFor: ["Hearing Impairment", "Physical Disability"],
      description:
        "Assist in food preparation and customer service. Maintain cleanliness and adhere to company protocols. To apply just bring the following: Resume, PWD ID and other supporting documents. Note that applicants may bring 1 person to support him/her during the process.",
    },
    {
      id: 2,
      title: "Cashier",
      company: "McDonald's Philippines",
      location: "Sindalan, City of San Fernando Pampanga",
      vacantPositions: 2,
      applicableFor: ["Visual Disability", "Psychosocial Disability"],
      description:
        "Manage cash registers and transactions, provide excellent customer service, and ensure accurate billing. To apply just bring the following: Resume, PWD ID and other supporting documents. Note that applicants may bring 1 person to support him/her during the process.",
    },
    {
      id: 3,
      title: "Service Crew",
      company: "Chowking",
      location: "San Agustin, City of San Fernando Pampanga",
      vacantPositions: 4,
      applicableFor: ["Learning Disability", "Mental Disability"],
      description:
        "Serve food and drinks, attend to customers, and ensure a pleasant dining experience. Assist in kitchen tasks when needed. To apply just bring the following: Resume, PWD ID and other supporting documents. Note that applicants may bring 1 person to support him/her during the process.",
    },
    {
      id: 4,
      title: "Store Assistant",
      company: "Mang Inasal",
      location: "Telabastagan, City of San Fernando Pampanga",
      vacantPositions: 1,
      applicableFor: ["Orthopedic Disability", "Communication Disability"],
      description:
        "Assist with daily store operations, including inventory management and customer service. Ensure cleanliness and organization. To apply just bring the following: Resume, PWD ID and other supporting documents. Note that applicants may bring 1 person to support him/her during the process.",
    },
    {
      id: 5,
      title: "Delivery Rider",
      company: "Pizza Hut",
      location: "Baliti, City of San Fernando Pampanga",
      vacantPositions: 2,
      applicableFor: ["Hearing Impairment", "Chronic Illness"],
      description:
        "Deliver food orders to customers safely and efficiently. Maintain delivery equipment and handle customer interactions politely. To apply just bring the following: Resume, PWD ID and other supporting documents. Note that applicants may bring 1 person to support him/her during the process.",
    },
  ];

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

          <div className="layout-page">
            <div className="content-wrapper container-wrap">
              <div className="container-xxl flex-grow-1 container-p-y">
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

                <div className="container mt-5">
                  <div className="row">
                    {/* LEFT: Job list with scroll */}
                    <div
                      className="col-md-6"
                      style={{
                        maxHeight: "80vh",
                        overflowY: "auto",
                        paddingRight: "1rem",
                      }}
                    >
                      {jobPostings.map((job) => (
                        <Card
                          key={job.id}
                          title="Test"
                          active={job.id === selectedJob?.id}
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                          >
                            <h3 className="text-decoration-underline">
                              {job.title}
                            </h3>
                            <span className="d-block d-flex align-items-center gap-1">
                              <i className="ti ti-buildings"></i>
                              {job.company}
                            </span>
                            <span className="d-block d-flex align-items-center gap-1">
                              <i className="ti ti-map-pin"></i>
                              {job.location}
                            </span>
                            <h5 className="my-3">
                              <span className="badge text-bg-primary">
                                Vacant Position/s: {job.vacantPositions}
                              </span>
                            </h5>
                            <div className="d-flex flex-wrap gap-1">
                              <span className="me-2">Applicable for:</span>
                              {job.applicableFor.map((disability, idx) => (
                                <span
                                  key={idx}
                                  className="badge text-bg-secondary"
                                >
                                  {disability}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>

                    {/* RIGHT: Sticky job details */}
                    <div className="col-md-6 col-lg-6 d-none d-md-block">
                      <div
                      // style={{
                      //   position: "sticky",
                      //   top: "20px",
                      //   zIndex: 10,
                      // }}
                      >
                        <Card title="Job Details">
                          <div className="selected-job">
                            {selectedJob ? (
                              <>
                                <h3 className="text-decoration-underline">
                                  {selectedJob.title}
                                </h3>
                                <span className="d-block d-flex align-items-center gap-1">
                                  <i className="ti ti-buildings"></i>
                                  {selectedJob.company}
                                </span>
                                <span className="d-block d-flex align-items-center gap-1">
                                  <i className="ti ti-map-pin"></i>
                                  {selectedJob.location}
                                </span>
                                <h5 className="my-3">
                                  <span className="badge text-bg-primary">
                                    Vacant Position/s:{" "}
                                    {selectedJob.vacantPositions}
                                  </span>
                                </h5>
                                <div className="d-flex flex-wrap gap-1">
                                  <span className="me-2">Applicable for:</span>
                                  {selectedJob.applicableFor.map(
                                    (disability, idx) => (
                                      <span
                                        key={idx}
                                        className="badge text-bg-secondary"
                                      >
                                        {disability}
                                      </span>
                                    )
                                  )}
                                  <p className="description mt-5">
                                    <strong>Job Description:</strong>{" "}
                                    {selectedJob.description}
                                  </p>
                                </div>
                              </>
                            ) : (
                              <p>Select a job to see details here.</p>
                            )}
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
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
