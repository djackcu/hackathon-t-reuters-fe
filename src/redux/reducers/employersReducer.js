import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dictionariesReducer(state = initialState.employers, action) {
  switch (action.type) {
    case types.ADD_EMPLOYER:
      return [...state,action.employer];
    case types.ADD_REVIEW:
    const selectedEmployer = state.filter(emp => emp===action.emp);
    selectedEmployer.reviews.push(action.review)
    return {...state,selectedEmployer}
    default:
      return state;
  }
}
