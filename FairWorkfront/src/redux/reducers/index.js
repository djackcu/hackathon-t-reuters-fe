import { combineReducers } from 'redux';
import employers from './employersReducer';

const rootReducer = combineReducers({
	employers
});

export default rootReducer;
