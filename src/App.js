import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import AllJobs from "./Pages/AllJobs";
import AddJob from "./Pages/AddJob";
import Profile from "./Pages/Profile";
import PrivateRouter from "./PrivateRouter";
import { useSelector, useDispatch } from "react-redux";
import { JobStats } from "./Redux/Action/JobAction";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRouter>
                    <Home />
                  </PrivateRouter>
                }
              />
              <Route
                path="/alljobs"
                element={
                  <PrivateRouter>
                    <AllJobs />
                  </PrivateRouter>
                }
              />

              <Route
                path="/addjob?/:id"
                element={
                  <PrivateRouter>
                    <AddJob />
                  </PrivateRouter>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRouter>
                    <Profile />
                  </PrivateRouter>
                }
              />
            </Route>
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
