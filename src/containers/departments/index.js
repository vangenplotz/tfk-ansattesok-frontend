import { connect } from "react-redux"
import Index from "../../pages/departments/index"
import * as departmentActions from "../../actions/departments"

const mapStateToProps = (state, props) => {
	const { entities, isLoading } = state.entities.departments;
    return {
    	departments: entities.filter(x => x.name.toLowerCase().includes(state.ui.departments.index.q.toLowerCase())),
			isLoading: isLoading,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	componentDidMount: () => {
    			dispatch(departmentActions.findAll());
			},
			onFilterChange: (value) => {
    		dispatch(departmentActions.filterDepartments(value));
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);