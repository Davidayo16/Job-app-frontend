import React, { useEffect } from "react";
import {
  createJob,
  editJob,
  getJob,
  getSingleJob,
} from "./../Redux/Action/JobAction";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import moment from "moment";
import { NOT_EDITING } from "./../Redux/Constants/JobConstants";
import Loading from "./../Loading/Error/Loading";

const AddJob = () => {
  const history = useNavigate();
  const locationn = useLocation();
  const dispatch = useDispatch();
  const getJob = useSelector((state) => state.getJob);
  const { job } = getJob;
  const editStatus = useSelector((state) => state.editStatus);
  const { isEditing } = editStatus;
  console.log(job?._id, isEditing);

  const [location, setLocation] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [type, setType] = React.useState("full-time");

  React.useEffect(() => {
    if (isEditing) {
      setLocation(job?.location);
      setPosition(job?.position);
      setCompany(job?.company);
    }
  }, [job]);
  const createJobb = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(
        editJob(job?._id, { location, company, position, status, type })
      );

      dispatch({ type: NOT_EDITING });
      setCompany("");
      setLocation("");
      setPosition("");
      setStatus("pending");
      setType("full-time");
    } else {
      dispatch(createJob({ location, company, position, status, type }));
      setCompany("");
      setLocation("");
      setPosition("");
      setStatus("pending");
      setType("full-time");
    }
  };

  const editJobb = useSelector((state) => state.editJobb);
  const { success, loading, error } = editJobb;

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
      {loading && <Loading />}
      <div className="addjob-wrapper py-4 px-4">
        <div className="container-xxl">
          <form className="stats-card row " onSubmit={(e) => createJobb(e)}>
            <h2 className="mb-3"> {isEditing ? "Edit Job" : "Add Job"}</h2>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Position
              </label>
              <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                type="text"
                className="form-control"
                id="search"
                required
              />
            </div>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Company
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                className="form-control"
                id="search"
                required
              />
            </div>
            <div className="mb-3 wid mt-0 col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Job Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control"
                id="search"
                required
              />
            </div>
            <div className="mb-3 wid mt-0 d-flex flex-column col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Status
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="pending">pending</option>
                <option value="interview">interview</option>
                <option value="declined">declined</option>
              </select>
            </div>
            <div className="mb-3 wid mt-0 d-flex flex-column col-12 col-lg-6 col-xl-4">
              <label for="search" className="form-label">
                Job Type
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="remote">remote</option>
                <option value="internship">internship</option>
              </select>
            </div>
            <div className="mt-3 mt-0 d-flex sc-container gap-4 a">
              <button className="submit">
                {isEditing ? "Edit" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJob;
