import React from "react";
import { FaAccessibleIcon, FaNewspaper, FaUserClock } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { deleteJob, getJobs, getSingleJob } from "../Redux/Action/JobAction";
import Loading from "../Loading/Error/Loading";
import Message from "../Loading/Error/Error";
import moment from "moment";
import { IS_EDITING } from "../Redux/Constants/JobConstants";
import ChartsContainer from "../components/ChartsContainer";
const AllJobs = () => {
  const [sort, setSort] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [type, setType] = React.useState("");
  const [search, setSearch] = React.useState("");

  const history = useNavigate();
  const locationn = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getJobs({ sort, status, type, search }));
  }, [dispatch, sort, status, type, search]);

  const listJobs = useSelector((state) => state.listJobs);
  const { jobs, loading, error } = listJobs;
  console.log(jobs?.newJobs);

  const handleClear = (e) => {
    e.preventDefault();
    setSort("");
    setType("");
    setSearch("");
    setStatus("");
    dispatch(getJobs({}));
  };
  const handleDeleteJob = (id) => {
    console.log(id);
    dispatch(deleteJob(id));
    dispatch(getJobs({}));
  };
  const getJob = useSelector((state) => state.getJob);
  const { job } = getJob;
  const handleEditJob = (id) => {
    dispatch(getSingleJob(id));
    dispatch({ type: IS_EDITING });
    history("/addjob");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="jobs py-4 px-4">
        <div className="container-xxl">
          {/* <div className="row"> */}
          {/* <div className="col-12 d-flex align-items-center"> */}
          <form className="stats-card row">
            <h2 className="mb-3">Search Form</h2>
            <div className="mb-3 wid mt-0 col-12 col-sm-6 col-md-4">
              <label for="search" className="form-label">
                Search
              </label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control"
                id="search"
              />
            </div>
            <div className="mb-3 wid mt-0 d-flex flex-column col-12 col-sm-6 col-md-4">
              <label for="status" className="form-label">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                class="form-select"
                aria-label="Default select example"
              >
                <option value="all">All</option>
                <option value="interview">Interview</option>
                <option value="declined">Declined</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="mb-3 wid mt-0 d-flex flex-column col-12 col-sm-6 col-md-4 a">
              <label for="type" className="form-label">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="all">All</option>
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="remote">remote</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div
              className="mb-3 wid mt-0 d-flex flex-column col-12 col-sm-6 col-md-4"
              a
            >
              <label for="search" className="form-label">
                Sort
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                class="form-select"
                aria-label="Default select example"
              >
                <option value="-createdAt">latest</option>
                <option value="createdAt">oldest</option>
                <option value="company">a-z</option>
                <option value="-company">z-a</option>
              </select>
            </div>
            <div className="mb-3 wid btn mt-0 d-flex flex-column col-12 col-sm-6 col-md-4 a">
              <button className="clear-filters" onClick={(e) => handleClear(e)}>
                clear filters
              </button>
            </div>
          </form>
          <div className="row mt-5 y">
            {loading && <Loading />}
            {error && <Message variant="danger">{error}</Message>}
            {jobs?.newJobs?.length ? (
              <>
                {jobs?.newJobs?.map((job) => {
                  return (
                    <div className="col-lg-6 col-12 mb-4 h">
                      <div className="d-flex gap-5 jobs-strip">
                        <h1 className="mb-0 strip-letter">{job?.company[0]}</h1>
                        <div>
                          <h3>{job?.position}</h3>
                          <p className="mb-0">{job?.company}</p>
                        </div>
                      </div>

                      <div className="d-flex flex-xl-row flex-column-reverse py-4 jobs-body gap-xl-5 gap-2">
                        <div className="d-flex flex-column gap-3">
                          <div className="d-flex x align-items-center">
                            <FaNewspaper />
                            <p className="mb-0">{job?.location}</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <FaNewspaper />
                            <p className="mb-0">{job?.type}</p>
                          </div>
                          <div className="d-flex gap-2">
                            <button
                              className="jobs-edit"
                              onClick={() => handleEditJob(job?._id)}
                            >
                              Edit
                            </button>
                            <button
                              className="jobs-delete"
                              onClick={() => handleDeleteJob(job?._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <div className="d-flex  flex-column gap-2">
                          <div className="d-flex  px-0 align-items-center">
                            <FaNewspaper className="i" />
                            <p className="mb-0 ml-0">
                              {moment(job?.createdAt).calendar()}
                            </p>
                          </div>
                          <div
                            className={`job-stattus ${
                              job.status === "pending"
                                ? "pendingg"
                                : job.status === "declined"
                                ? "declinedd"
                                : "interview"
                            }`}
                          >
                            {job?.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              !loading && <h1>No jobs to display</h1>
            )}
          </div>

          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AllJobs;
