import {
  NOT_ACTIVE,
  IS_ACTIVE,
  IS_ACTIVE_SMALL,
  NOT_ACTIVE_SMALL,
} from "./../../Constants/SidebarConstant";

export const sideBarReucer = (state = { isSidebarActive: true }, action) => {
  switch (action.type) {
    case IS_ACTIVE:
      return { isSidebarActive: !state.isSidebarActive };

    default:
      return state;
  }
};

export const smallSideBarReducer = (
  state = { isSidebarActivee: false },
  action
) => {
  switch (action.type) {
    case IS_ACTIVE_SMALL:
      return { isSidebarActivee: true };

    case NOT_ACTIVE_SMALL:
      return { isSidebarActivee: false };

    default:
      return state;
  }
};
