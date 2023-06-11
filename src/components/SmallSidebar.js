import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  FaAddressBook,
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaBookmark,
  FaChartBar,
  FaSearch,
  FaUser,
  FaUserAltSlash,
  FaUserAstronaut,
  FaUserCircle,
  FaUserFriends,
  FaUserSecret,
  FaUserTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NOT_ACTIVE_SMALL } from "../Redux/Constants/SidebarConstant";
import { useEffect, useState } from "react";
const SmallSidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const setSmallSidebar = useSelector((state) => state.setSmallSidebar);
  const { isSidebarActivee } = setSmallSidebar;
  console.log(isSidebarActivee);

  const closeSidebar = () => {
    dispatch({ type: NOT_ACTIVE_SMALL });
  };
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const closeSidebarr = () => {
    dispatch({ type: NOT_ACTIVE_SMALL });
  };
  return (
    <>
      <div
        className={
          isSidebarActivee
            ? "small-sidebar-wrapper d-lg-none "
            : " not-active-sidebar"
        }
      >
        <div className="small-sidebar">
          <FaTimes className="times" onClick={() => closeSidebar()} />
          <div className="mt-5 small-sidebar-main">
            <img src="/images/logo.png" className="image-fluid img-logo" />
            <div className="d-fle small-sidebar-section">
              <Link to={"/"} className=" side">
                <div
                  className="d-flex justify-content-center mt-5"
                  onClick={closeSidebar}
                >
                  <FaChartBar
                    className={
                      activeLink === "/"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">Stats</p>
                </div>
              </Link>
              <Link to={"/alljobs"} className="side">
                <div
                  className="d-flex  justify-content-center  mt-5"
                  onClick={closeSidebar}
                >
                  <FaSearch
                    className={
                      activeLink === "/alljobs"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">All jobs</p>
                </div>
              </Link>
              <Link to={"/addjob"} className=" side">
                <div
                  className="d-flex justify-content-center  mt-5"
                  onClick={closeSidebar}
                >
                  <FaBook
                    className={
                      activeLink === "/addjob"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">Add job</p>
                </div>
              </Link>
              <Link to={"/profile"} className="side">
                <div
                  className="d-flex  justify-content-center  mt-5"
                  onClick={closeSidebar}
                >
                  <FaUserSecret
                    className={
                      activeLink === "/profile"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">Profile</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallSidebar;
