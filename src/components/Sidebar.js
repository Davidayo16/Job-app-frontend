import React from "react";
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
import { useEffect, useState } from "react";
const Sidebar = () => {
  const dispatch = useDispatch();
  const setSidebar = useSelector((state) => state.setSidebar);
  const { isSidebarActive } = setSidebar;
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const { pathname } = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <div
        className={
          isSidebarActive ? "side-bar-main" : "side-bar-main not-active"
        }
      >
        <div className="sidebar-section">
          <div className="sidebar-logo ">
            <img src="/images/logo.png" className="img-fluid " />
          </div>
          <div className="mt-5 hey">
            <Link to={"/"}>
              <div className="sidebar-content d-flex align-items-center justify-content-center">
                <div className="d-flex side align-items-center ">
                  <FaChartBar
                    // className="fa-sidebar-icon  active"
                    className={
                      activeLink === "/"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">Stats</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-0 hey">
            <Link to={"/alljobs"}>
              <div className="sidebar-content d-flex align-items-center justify-content-center">
                <div className="d-flex side align-items-center ">
                  <FaSearch
                    className={
                      activeLink === "/alljobs"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon  "
                    }
                  />
                  <p className="mb-0">All jobs</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-0 hey">
            <Link to={"/addjob"}>
              <div className="sidebar-content d-flex align-items-center justify-content-center">
                <div className="d-flex side align-items-center ">
                  <FaBook
                    className={
                      activeLink === "/addjob"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">Add job</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-0 hey">
            <Link to={"/profile"}>
              <div className="sidebar-content d-flex align-items-center justify-content-center">
                <div className="d-flex side align-items-center ">
                  <FaUserSecret
                    className={
                      activeLink === "/profile"
                        ? "fa-sidebar-icon  active"
                        : "fa-sidebar-icon "
                    }
                  />
                  <p className="mb-0">Profile</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
