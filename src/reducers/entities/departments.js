import * as entityConstants from "../../constants/entities"

const initialState = {
	entities: [],
	isLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case entityConstants.DEPARTMENTS_LOAD_REQUEST:
			return { ...state, isLoading: true };
		case entityConstants.DEPARTMENTS_LOAD_SUCCESS:
			return { ...state, isLoading: false, entities: action.entities };
		case entityConstants.DEPARTMENTS_LOAD_FAILURE:
			return { ...state, isLoading: false };
		default:
			return state;
	}
}