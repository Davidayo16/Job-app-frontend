import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  sideBarReucer,
  smallSideBarReducer,
} from "./Reducers/SidebarReducer/SidebarReducer";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./Reducers/UserReducers";
import {
  deleteJobsReducer,
  editJobsReducer,
  getJobReducer,
  getJobStatsReducer,
  getJobsReducer,
  jobCreateReducer,
} from "./Reducers/JobReducer";
import { isEditReducer } from "./Reducers/EditReducer";

const reducer = combineReducers({
  setSidebar: sideBarReucer,
  setSmallSidebar: smallSideBarReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  jobCreate: jobCreateReducer,
  listJobs: getJobsReducer,
  deleteJob: deleteJobsReducer,
  editJobb: editJobsReducer,
  getJob: getJobReducer,
  getStats: getJobStatsReducer,
  editStatus: isEditReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfoo")
  ? JSON.parse(localStorage.getItem("userInfoo"))
  : null;

const innitialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};
const Middleware = [thunk];
const store = createStore(
  reducer,
  innitialState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
