import axios from "axios"
import * as entityConstants from "../constants/entities"
import * as departmentUiConstants from "../constants/ui/departments"
import * as departments from "../constants/entities"

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

export const filterDepartments = (value) => {
	return {
		type: departmentUiConstants.UI_DEPARTMENTS_INDEX_ON_FILTER,
		value
	}
};

const findOneRequest = () => {
	return {
		type: departments.DEPARTMENT_LOAD_REQUEST
	}
};

const findOneSuccess = (entity) => {
	return {
		type: departments.DEPARTMENT_LOAD_SUCCESS,
		entity
	}
};

const findOneFailure = () => {
	return {
		type: departments.DEPARTMENT_LOAD_FAILURE
	}
};

export const findOne = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch(findOneRequest());
			const response = await axios.get(`/api/departments/${id}`);
			dispatch(findOneSuccess(response.data.department));
		} catch (error) {
			dispatch(findOneFailure());
		}
	}
};