import axios from "axios";
import {
  IS_EDITING,
  JOB_CREATE_FAIL,
  JOB_CREATE_REQUEST,
  JOB_CREATE_SUCCESS,
  JOB_DELETE_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DETAIL_FAIL,
  JOB_DETAIL_REQUEST,
  JOB_DETAIL_SUCCESS,
  JOB_LIST_FAIL,
  JOB_LIST_REQUEST,
  JOB_LIST_SUCCESS,
  JOB_STAT_FAIL,
  JOB_STAT_REQUEST,
  JOB_STAT_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_UPDATE_REQUEST,
  JOB_UPDATE_SUCCESS,
} from "../Constants/JobConstants";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with your environment variable name
});

export const createJob = (dataa) => async (dispatch, getState) => {
  console.log(dataa);
  try {
    dispatch({ type: JOB_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await api.post(`/api/jobs`, dataa, config);
    console.log(data);
    dispatch({ type: JOB_CREATE_SUCCESS, payload: data });
    toast(`Job Created`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (error) {
    dispatch({
      type: JOB_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getJobs =
  ({ sort, status, type, search, page }) =>
  async (dispatch, getState) => {
    let url = "/api/jobs";

    if (type && type !== "all") {
      url += `?type=${type}`;
    }

    if (sort && sort !== "all") {
      url += `${url.includes("?") ? "&" : "?"}sort=${sort}`;
    }

    if (status && status !== "all") {
      url += `${
        url.includes("?") || url.includes("&") ? "&" : "?"
      }status=${status}`;
    }

    if (search) {
      url += `${
        url.includes("?") || url.includes("&") ? "&" : "?"
      }search=${search}`;
    }

    if (page) {
      url += `${
        url.includes("?") || url.includes("&") ? "&" : "?"
      }page=${page}`;
    }

    try {
      dispatch({ type: JOB_LIST_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      console.log(userInfo.token);
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await api.get(url, config);
      console.log(data);
      dispatch({ type: JOB_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: JOB_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteJob = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: JOB_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await api.delete(`/api/jobs/${id}`, config);
    console.log(data);
    dispatch({ type: JOB_DELETE_SUCCESS, payload: data });
    toast(`Job Deleted`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (error) {
    dispatch({
      type: JOB_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editJob = (id, dataa) => async (dispatch, getState) => {
  console.log(dataa);
  try {
    dispatch({ type: JOB_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await api.put(`/api/jobs/${id}`, dataa, config);
    console.log(data);
    toast(`Job Updated`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    dispatch({ type: JOB_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: JOB_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleJob = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: JOB_DETAIL_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/jobs/${id}`, config);

    console.log(data);
    dispatch({ type: JOB_DETAIL_SUCCESS, payload: data });
    dispatch({ type: IS_EDITING });
  } catch (error) {
    dispatch({
      type: JOB_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const JobStats = () => async (dispatch, getState) => {
  try {
    dispatch({ type: JOB_STAT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/jobs/stats`, config);
    console.log(data);

    dispatch({
      type: JOB_STAT_SUCCESS,
      payload: {
        stats: data.defaultStats,
        monthlyApplications: data.monthlyApplications,
      },
    });
  } catch (error) {
    dispatch({
      type: JOB_STAT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
