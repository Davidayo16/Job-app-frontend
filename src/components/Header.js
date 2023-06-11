import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaUser, FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { IS_ACTIVE, IS_ACTIVE_SMALL } from "../Redux/Constants/SidebarConstant";
import { logout } from "../Redux/Action/UserAction";

const Header = () => {
  const dispatch = useDispatch();
  const setSidebar = useSelector((state) => state.setSidebar);
  const { isSidebarActive } = setSidebar;
  console.log(isSidebarActive);

  const setSmallSidebar = useSelector((state) => state.setSmallSidebar);
  const { isSidebarActivee } = setSmallSidebar;
  console.log(isSidebarActivee);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  console.log(userInfo);

  const handleBar = () => {
    dispatch({ type: IS_ACTIVE });
  };
  const openSidebr = () => {
    dispatch({ type: IS_ACTIVE_SMALL });
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="header-main ">
        <div className="container-xxl">
          <div className="d-flex justify-content-between align-items-center">
            <svg
              className="d-none d-lg-block"
              onClick={() => handleBar()}
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_05">
                  {" "}
                  <path
                    id="Vector"
                    d="M5 17H13M5 12H19M11 7H19"
                    stroke="rgb(25, 154, 177)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <svg
              className="d-block d-lg-none"
              onClick={() => openSidebr()}
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_05">
                  {" "}
                  <path
                    id="Vector"
                    d="M5 17H13M5 12H19M11 7H19"
                    stroke="rgb(25, 154, 177)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>

            <h2 className="dashboard">Dashboard</h2>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <FaUser className="fa-user" />
                </span>
                {userInfo?.name}
              </button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton1 p-0"
              >
                <li onClick={() => handleLogout()}>
                  <Link className="dropdown-item">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
