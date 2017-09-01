import axios from "axios"
import * as entityConstants from "../constants/entities"

const findAllRequest = () => {
	return {
		type: entityConstants.DEPARTMENTS_LOAD_REQUEST
	}
};

const findAllSuccess = (entities, total) => {
	return {
		type: entityConstants.DEPARTMENTS_LOAD_SUCCESS,
		entities,
		total
	}
};

const findAllFailure = () => {
	return {
		type: entityConstants.DEPARTMENTS_LOAD_FAILURE
	}
};

export const findAll = (from = 0, size = 100) => {
	return async (dispatch, getState) => {
		try {
			dispatch(findAllRequest());
			const response = await axios.get('/api/departments', { params: { from, size }});
			dispatch(findAllSuccess(response.data.departments, parseInt(response.headers['x-total'])));
		} catch (error) {
			dispatch(findAllFailure());
		}
	}
};