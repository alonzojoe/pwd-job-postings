import Navbar from "./components/Navbar";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { useState } from "react";

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modal, toggleModal] = useState(false);

  const jobPostings = [
    {
      id: 1,
      title: "Food Crew",
      company: "Jollibee Food Corporation",
      location: "Dolores, City of San Fernando Pampanga",
      vacantPositions: 3,
      applicableFor: ["Hearing Disability", "Physical Disability"],
      description:
        "Prepare food items following company standards and ensure they meet quality and safety requirements. Engage with customers courteously and provide assistance with their needs. Maintain cleanliness in food preparation areas and adhere strictly to Jollibee's hygiene protocols. Handle cash transactions and support team members as needed. Applicants may walk in to Jollibee Food Corporation, Dolores, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
    },
    {
      id: 2,
      title: "Cashier",
      company: "McDonald's Philippines",
      location: "Sindalan, City of San Fernando Pampanga",
      vacantPositions: 2,
      applicableFor: ["Visual Disability", "Psychosocial Disability"],
      description:
        "Operate cash registers efficiently and manage financial transactions accurately. Provide prompt and friendly customer service by addressing inquiries and resolving minor issues. Ensure compliance with McDonald's billing and payment policies. Assist in maintaining cleanliness in customer areas during downtime. Applicants may walk in to McDonald's Philippines, Sindalan, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
    },
    {
      id: 3,
      title: "Service Crew",
      company: "Chowking",
      location: "San Agustin, City of San Fernando Pampanga",
      vacantPositions: 4,
      applicableFor: ["Learning Disability", "Mental Disability"],
      description:
        "Greet customers warmly and assist them with their orders. Serve food and beverages promptly while ensuring quality service. Help maintain cleanliness and organization in the dining area. Perform basic kitchen tasks such as food prep and cleanup when required. Applicants may walk in to Chowking, San Agustin, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
    },
    {
      id: 4,
      title: "Store Assistant",
      company: "Mang Inasal",
      location: "Telabastagan, City of San Fernando Pampanga",
      vacantPositions: 1,
      applicableFor: ["Orthopedic Disability", "Communication Disability"],
      description:
        "Support day-to-day operations by assisting with inventory management and organizing supplies. Provide excellent customer service and ensure guests' needs are met promptly. Help maintain store cleanliness and uphold Mang Inasal's operational standards. Assist in coordinating tasks with other team members. Applicants may walk in to Mang Inasal, Telabastagan, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
    },
    {
      id: 5,
      title: "Delivery Rider",
      company: "Pizza Hut",
      location: "Baliti, City of San Fernando Pampanga",
      vacantPositions: 2,
      applicableFor: ["Hearing Disability", "Chronic Illness"],
      description:
        "Deliver food orders safely and promptly to customers' locations while ensuring the correct order is delivered. Maintain delivery vehicles and equipment in top condition. Interact courteously with customers during delivery and handle any minor issues effectively. Assist in organizing delivery routes to improve efficiency. Applicants may walk in to Pizza Hut, Baliti, City of San Fernando Pampanga, and bring the following requirements: Resume, PWD ID, and other supporting documents. Note that applicants may bring 1 person to assist them during the application process.",
    },
  ];

  const viewDetails = (job) => {
    setSelectedJob(job);
    toggleModal(true);
  };

  return (
    <>
      {modal && (
        <Modal title={`Job Details`} onClose={() => toggleModal(false)}>
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
                      Vacant Position/s: {selectedJob.vacantPositions}
                    </span>
                  </h5>
                  <div className="d-flex flex-wrap gap-1">
                    <span className="me-2">Applicable for:</span>
                    {selectedJob.applicableFor.map((disability, idx) => (
                      <span key={idx} className="badge text-bg-secondary">
                        {disability}
                      </span>
                    ))}
                    <div className="description mt-2">
                      <hr />
                      <strong>Job Description:</strong>{" "}
                      {selectedJob.description}
                    </div>
                  </div>
                </>
              ) : (
                <p className="fw-bold h4 text-center mt-3">
                  Select a job to see details here.
                </p>
              )}
            </div>
          </Card>
        </Modal>
      )}
      <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
        <div className="layout-container">
          <Navbar />
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
                      className="col-md-6 col-sm-12"
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
                            onClick={() => viewDetails(job)}
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
                                  <div className="description mt-2">
                                    <hr />
                                    <strong>Job Description:</strong>{" "}
                                    {selectedJob.description}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <p className="fw-bold h4 text-center mt-3">
                                Select a job to see details here.
                              </p>
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
