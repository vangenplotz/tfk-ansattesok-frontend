import { connect } from "react-redux"
import Index from "../../pages/employees/index"
import * as employeeActions from "../../actions/employees"


const mapStateToProps = (state, props) => {
	const { results, numberOfHits, isLoading } = state.employeeSearch;
    return {
    	results,
			numberOfHits,
			isLoading: isLoading
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	componentDidMount: () => {
				dispatch(employeeActions.searchByFullName(''));
			},
    	onChange: (q) => {
    		dispatch(employeeActions.searchByFullName(q));
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);