import { connect } from "react-redux"
import SearchFilter from "../../components/search_filter/search_filter"
import * as searchActions from "../../actions/search"

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
		}
	}
};

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(SearchFilter);