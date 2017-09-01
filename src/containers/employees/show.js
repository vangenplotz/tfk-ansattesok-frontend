import { connect } from "react-redux"
import Show from "../../pages/employees/show"
import * as employeeActions from "../../actions/employees"

const mapStateToProps = (state, props) => {
    return {
    	employee: state.entities.employees.entities[props.params.id]
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	componentDidMount: () => {
    		dispatch(employeeActions.searchById(props.params.id))
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show);