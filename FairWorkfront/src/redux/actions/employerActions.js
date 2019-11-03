import * as types from './actionTypes';
import * as employerApi from '../../api/employersApi';
import { beginApiCall } from './apiStatusActions';

export function loadEmployerSuccess (employer) {
	return { type: types.LOAD_EMPLOYER_SUCCESS, employer };
}

export function createEmployerSuccess (employer) {
	return { type: types.ADD_EMPLOYER_SUCCESS, employer };
}

export function updateEmployerSuccess (employer) {
	return { type: types.UPDATE_EMPLOYER_SUCCESS, employer };
}

export function loadEmployers () {
	return function (dispatch) {
		dispatch(beginApiCall());
		return employerApi
			.getEmployers()
			.then((employer) => {
				dispatch(loadEmployerSuccess(employer));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export function saveEmployer (employer) {
	//eslint-disable-next-line no-unused-vars
	return function (dispatch) {
		dispatch(beginApiCall());
		return employerApi.saveEmployer(employer)
			.then((savedEmployer) => {

					employer.id ? dispatch(updateEmployerSuccess(savedEmployer)) :
					dispatch(createEmployerSuccess(savedEmployer));
			})
			.catch((error) => {
				throw error;
			});
	};
}
