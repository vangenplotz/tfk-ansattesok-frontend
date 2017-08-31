import { connect } from "react-redux"
import Index from "../../pages/departments/index"
import * as departmentActions from "../../actions/departments"


const mapStateToProps = (state, props) => {
	const { entities, isLoading } = state.entities.departments;
    return {
    	departments: entities,
			isLoading: isLoading
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	componentDidMount: () => {
    			dispatch(departmentActions.findAll());
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);