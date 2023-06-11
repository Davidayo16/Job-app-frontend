import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landing-container py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 d">
              <div className="header-logo">
                <img src="/images/logo.png" className="img-fluid " />
              </div>
            </div>
          </div>
          {/* <div className="flex align-items-center justify-content-center "> */}
          <div className="d-flex align-items-center bb">
            <div className="col-md-6 col-12 landing-title">
              <h1>
                Job <span>Tracking </span>App
              </h1>
              <h5 className="mt-4 mb-4">
                Track, manage, and organize your job applications effortlessly.
                Stay on top of deadlines, follow-ups, and interview schedules.
                Simplify your job search and increase your chances of success.
                Join our platform and take control of your career journey today.
              </h5>
              <Link to={"/login"}>
                <button className="landing-btn">Login/Register</button>
              </Link>
            </div>
            <div className="col-6 d-md-block d-none">
              <img src="/images/job3.png" className="img-fluid" />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
