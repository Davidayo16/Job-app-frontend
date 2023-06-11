import React from "react";
import { IS_EDITING, NOT_EDITING } from "../Constants/JobConstants";

export const isEditReducer = (state = { isEditing: false }, action) => {
  switch (action.type) {
    case IS_EDITING:
      return { isEditing: true };

    case NOT_EDITING:
      return { isEditing: false };

    default:
      return state;
  }
};
