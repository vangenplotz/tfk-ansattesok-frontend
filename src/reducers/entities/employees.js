import * as entityConstants from "../../constants/entities"

const initialState = {
	isLoading: false,
	ids: [],
	entities: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case entityConstants.EMPLOYEE_LOAD_REQUEST:
			return { ...state, isLoading: true };
		case entityConstants.EMPLOYEE_LOAD_SUCCESS:
			return { ...state,
				isLoading: false,
				ids: [...new Set([...state.ids, action.employee.id ])],
				entities: { ...state.entities, [action.employee.id]: action.employee }
			};
		case entityConstants.EMPLOYEE_LOAD_FAILURE:
			return { ...state, isLoading: false };
		default:
			return state;
	}
}