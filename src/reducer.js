import { combineReducers } from "redux";
import { SET_USER_DETAILS, SET_TABLE_DETAILS } from "./constants";

const defaultState = {
  userDetails: null,
};

const Application = (state = defaultState, { type, payload, ...action }) => {
  switch (type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    case SET_TABLE_DETAILS:
      return {
        ...state,
        tableDetails: payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  Application,
});
