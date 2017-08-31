import axios from "axios"
import * as searchConstants from "../constants/search"

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
			const response = await axios.get('/people', { params: { field: 'fullname', q, size: 25 } });
			dispatch(searchByFullNameSuccess(response.data.people, parseInt(response.headers['x-total'])));
		} catch (error) {
			dispatch(searchByFullNameFailure());
		}
	};
};