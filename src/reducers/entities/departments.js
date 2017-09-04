import * as entityConstants from "../../constants/entities"

const initialState = {
	entities: [],
	isLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case entityConstants.DEPARTMENTS_LOAD_REQUEST:
		case entityConstants.DEPARTMENT_LOAD_REQUEST:
			return { ...state, isLoading: true };
		case entityConstants.DEPARTMENTS_LOAD_SUCCESS:
			return { ...state, isLoading: false, entities: action.entities };
		case entityConstants.DEPARTMENTS_LOAD_FAILURE:
		case entityConstants.DEPARTMENT_LOAD_FAILURE:
			return { ...state, isLoading: false };
		case entityConstants.DEPARTMENT_LOAD_SUCCESS:
			return { ...state, isLoading: false, entities: addOrReplace(state, action) };

		default:
			return state;
	}
}


const addOrReplace = (state, action) => {
	const index = state.entities.findIndex(e => e.id === action.entity.id);
	if (index === -1) {
		return [action.entity];
	}
	return [...state.entities.slice(0, index), ...state.entities.slice(index + 1), action.entity];
};