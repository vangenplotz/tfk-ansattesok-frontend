import { connect } from "react-redux"
import Show from "../../pages/departments/show"
import * as departmentActions from "../../actions/departments"

const mapStateToProps = (state, props) => {
    return {
    	department: state.entities.departments.entities.find(x => x.id === props.params.id) || undefined
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	componentDidMount: () => {
    		dispatch(departmentActions.findOne(props.params.id));
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show);