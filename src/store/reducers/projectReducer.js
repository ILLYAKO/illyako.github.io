import { FETCH_PROJECTS, NEW_PROJECT } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_PROJECT:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
