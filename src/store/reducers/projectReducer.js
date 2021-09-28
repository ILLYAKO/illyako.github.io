import {
  FETCH_PROJECTS,
  // NEW_PROJECT
} from "../actions/types";

const initialState = {
  items: [],
  // item: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
