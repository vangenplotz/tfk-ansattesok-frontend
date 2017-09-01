import * as searchConstants from "../constants/search"

export const onChange = (key, value) => {
	return {
		type: searchConstants.SEARCH_CHANGE,
		search: 'employees',
		key,
		value
	}
};