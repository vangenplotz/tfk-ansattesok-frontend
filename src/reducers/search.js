import * as searchConstants from "../constants/search"

const initialState = {
	q: '',
	departmentIds: [],
	fullTime: false,
	partTime: false,
	isLoading: false,
	results: [],
	numberOfHits: 0
};

export const createSearchReducer = (searchField) => {
	return (state, action) => {
		const { search } = action;
		const isInitializationCall = state === undefined;
		if (search !== searchField && !isInitializationCall) {
			return state;
		}
		if (isInitializationCall) {
			return searchReducer(initialState, action);
		}
		return searchReducer(state, action);
	}
};

const searchReducer = (state, action) => {
	switch (action.type) {
		case searchConstants.SEARCH_REQUEST:
			return { ...state, isLoading: true, q: action.q };
		case searchConstants.SEARCH_SUCCESS:
			return { ...state, isLoading: false, results: action.results, numberOfHits: action.numberOfHits };
		case searchConstants.SEARCH_FAILURE:
			return { ...state, isLoading: false, results: [], numberOfHits: 0 };
		case searchConstants.SEARCH_CHANGE:
			return { ...state, [action.key]: action.value };
		case searchConstants.SEARCH_PUSH:
			return { ...state, [action.key]: [...action.key, action.value] };
		default:
			return state;
	}
};