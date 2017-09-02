import { connect } from "react-redux"
import Index from "../../pages/employees/index"
import * as employeeActions from "../../actions/employees"
import * as departmentActions from "../../actions/departments"


const mapStateToProps = (state, props) => {
	const { results, numberOfHits, isLoading, page } = state.employeeSearch;
    return {
			departments: state.entities.departments.entities.map(department => {
    		return {
    			id: department.id,
					value: department.id,
					text: !!department.name ? department.name : 'Ingen avdeling',
			}}),
    	results,
			numberOfHits,
			isLoading: isLoading,
			page
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	componentDidMount: () => {
    		dispatch(departmentActions.findAll());
				dispatch(employeeActions.searchByFullName(''));
			},
    	onChange: (q) => {
    		dispatch(employeeActions.searchByFullName(q));
			},
			onPaginationClick: (currentPage) => {
    		dispatch((dispatch, getState) => {
					dispatch(employeeActions.searchByFullName(getState().employeeSearch.q, currentPage - 1));
				});
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);