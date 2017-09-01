import { connect } from "react-redux"
import Index from "../../pages/employees/index"
import * as employeeActions from "../../actions/employees"
import * as departmentActions from "../../actions/departments"


const mapStateToProps = (state, props) => {
	const { results, numberOfHits, isLoading } = state.employeeSearch;
    return {
			departments: state.entities.departments.entities.map(department => {
    		return {
    			id: department.id,
					value: department.id,
					text: !!department.name ? department.name : 'Ingen avdeling',
			}}),
    	results,
			numberOfHits,
			isLoading: isLoading
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
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);