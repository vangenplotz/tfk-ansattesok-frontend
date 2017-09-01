import * as departmentActions from "../../../constants/ui/departments"

const initialState = {
	q: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case departmentActions.UI_DEPARTMENTS_INDEX_ON_FILTER:
			return { ...state, q: action.value };
		default:
			return state;
	}
}