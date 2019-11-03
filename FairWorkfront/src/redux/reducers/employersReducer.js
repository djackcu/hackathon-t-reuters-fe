import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function employersReducer(state = initialState.employers, action) {
  switch (action.type) {
    case types.LOAD_EMPLOYER_SUCCESS:
      console.log(action.employer)
      return action.employer;
    case types.ADD_EMPLOYER_SUCCESS:
      return [...state,action.employer];
    case types.UPDATE_EMPLOYER_SUCCESS:
      return state.map(emp => {
        if(emp.name === action.employer.name)
        return action.employer
      })
    /* case types.ADD_REVIEW:
    const selectedEmployer = state.filter(emp => emp===action.emp);
    selectedEmployer.reviews.push(action.review)
    return {...state,selectedEmployer} */
    default:
      return state;
  }
}