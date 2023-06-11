import {
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

export const jobCreateReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_CREATE_REQUEST:
      return { loading: true };
    case JOB_CREATE_SUCCESS:
      return { loading: false, success: true };
    case JOB_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getJobsReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_LIST_REQUEST:
      return { loading: true };
    case JOB_LIST_SUCCESS:
      return { loading: false, jobs: action.payload };
    case JOB_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteJobsReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_DELETE_REQUEST:
      return { loading: true };
    case JOB_DELETE_SUCCESS:
      return { loading: false, success: true };
    case JOB_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const editJobsReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_UPDATE_REQUEST:
      return { loading: true };
    case JOB_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case JOB_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getJobReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_DETAIL_REQUEST:
      return { loading: true };
    case JOB_DETAIL_SUCCESS:
      return { loading: false, job: action.payload };
    case JOB_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getJobStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_STAT_REQUEST:
      return { loading: true };
    case JOB_STAT_SUCCESS:
      return {
        loading: false,
        stats: action.payload.stats,
        monthlyApplications: action.payload.monthlyApplications,
      };
    case JOB_STAT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
