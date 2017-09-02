import axios from "axios"
import * as searchConstants from "../constants/search"
import * as entityConstants from "../constants/entities"
import * as searchActions from "../actions/search"
import { schema, normalize } from "normalizr"

const searchByFullNameRequest = (q) => {
	return {
		type: searchConstants.SEARCH_REQUEST,
		search: 'employees',
		isLoading: true,
		q
	}
};

const searchByFullNameSuccess = (results, numberOfHits) => {
	return {
		type: searchConstants.SEARCH_SUCCESS,
		search: 'employees',
		isLoading: false,
		results,
		numberOfHits
	}
};

const searchByFullNameFailure = () => {
	return {
		type: searchConstants.SEARCH_FAILURE,
		search: 'employees',
		isLoading: false,
		results: [],
		numberOfHits: 0
	}
};

export const searchByFullName = (q, page = 0) => {
	return async (dispatch, getState) => {
		try {
			const { departmentIds, partTime, fullTime } = getState().employeeSearch;
			dispatch(searchByFullNameRequest(q));
			const response = await axios.get('/api/people', { params: { q, page: page * 25, size: 25, partTime, fullTime, departmentIds: departmentIds.join(',') } });
			dispatch(searchByFullNameSuccess(response.data.people, parseInt(response.headers['x-total'])));
			dispatch(searchActions.onChange('page', page + 1));
		} catch (error) {
			dispatch(searchByFullNameFailure());
		}
	};
};

const searchByIdRequest = () => {
	return {
		type: entityConstants.EMPLOYEE_LOAD_REQUEST
	}
};

const searchByIdSuccess = (employee) => {
	return {
		type: entityConstants.EMPLOYEE_LOAD_SUCCESS,
		employee
	}
};

const searchByIdFailure = () => {
	return {
		type: entityConstants.EMPLOYEE_LOAD_FAILURE
	}
};

export const searchById = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch(searchByIdRequest());
			const response = await axios.get(`/api/people/${id}`);
			dispatch(searchByIdSuccess(response.data.person));
		} catch (error) {
			dispatch(searchByIdFailure());
		}
	}
};