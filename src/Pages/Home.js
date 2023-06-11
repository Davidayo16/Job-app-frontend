import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { FaBan, FaBug, FaCalendarCheck, FaUserClock } from "react-icons/fa";
import ChartsContainer from "../components/ChartsContainer";
import BarChartComponent from "../components/BarChart";
import { JobStats } from "../Redux/Action/JobAction";
import Loading from "../Loading/Error/Loading";

const Home = () => {
  const history = useNavigate();
  const locationn = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(JobStats());
  }, []);
  const getStats = useSelector((state) => state.getStats);
  const { monthlyApplications, stats, loading } = getStats;
  console.log(monthlyApplications, stats?.pending);
  return (
    <div className="home py-4 px-lg-4 mt-10">
      <div className="container-xxl">
        {monthlyApplications && (
          <div className="row gx-3 g-3">
            <div className="col-xl-4 col-md-6 col-12 gx-4 a">
              <div className="stats-card pending-bottom">
                <div className="d-flex justify-content-between">
                  <h1 className="pending">{stats?.pending}</h1>
                  <div className="stats-icon pending-icon-cont">
                    <FaUserClock className="stats-icon-fa pending" />
                  </div>
                </div>
                <h3 className="mt-3">Pending Applications</h3>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-12 gx-4 ">
              <div className="stats-card scheduled-bottom">
                <div className="d-flex justify-content-between">
                  <h1 className="scheduled">{stats?.interview}</h1>
                  <div className="stats-icon scheduled-icon-cont">
                    <FaCalendarCheck className="stats-icon-fa scheduled" />
                  </div>
                </div>
                <h3 className="mt-3">Interviews Scheduled</h3>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-12 gx-4 ">
              <div className="stats-card declined-bottom">
                <div className="d-flex justify-content-between">
                  <h1 className="declined">{stats?.declined}</h1>
                  <div className="stats-icon declined-icon-cont">
                    <FaBug className="stats-icon-fa declined" />
                  </div>
                </div>
                <h3 className="mt-3">Jobs Declined</h3>
              </div>
            </div>
          </div>
        )}
        {loading && <Loading />}
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div className=" chart-cont w-75">{stats && <ChartsContainer />}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
