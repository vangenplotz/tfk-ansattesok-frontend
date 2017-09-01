import axios from "axios"
import * as searchConstants from "../constants/search"
import * as entityConstants from "../constants/entities"
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

export const searchByFullName = (q) => {
	return async (dispatch, getState) => {
		try {
			dispatch(searchByFullNameRequest(q));
			const response = await axios.get('/api/people', { params: { field: 'fullname', q, size: 25 } });
			dispatch(searchByFullNameSuccess(response.data.people, parseInt(response.headers['x-total'])));
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