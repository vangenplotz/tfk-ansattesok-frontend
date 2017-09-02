import { connect } from "react-redux"
import SearchFilter from "../../components/search_filter/search_filter"
import * as searchActions from "../../actions/search"
import * as employeeActions from "../../actions/employees"

const mapStateToProps = (state, props) => {
	return {
		fullTime: state.employeeSearch.fullTime,
		partTime: state.employeeSearch.partTime
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onChange: (key, value) => {
			dispatch(searchActions.onChange(key, value));
			dispatch((dispatch, getState) => {
				dispatch(employeeActions.searchByFullName(getState().employeeSearch.q));
			});
		}
	}
};

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(SearchFilter);