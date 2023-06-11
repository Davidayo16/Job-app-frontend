import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import SmallSidebar from "./SmallSidebar";

const Layout = () => {
  const dispatch = useDispatch();
  const setSidebar = useSelector((state) => state.setSidebar);
  const { isSidebarActive } = setSidebar;
  return (
    <div className="d-flex hi">
      <Sidebar />
      <SmallSidebar />
      <div className={isSidebarActive ? "main" : "full"}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
