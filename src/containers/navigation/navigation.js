import { connect } from "react-redux"
import Navigation from "../../components/navigation/navigation"
import { push } from "react-router-redux"

const mapStateToProps = (state, props) => {
    return {
    	pathname: state.routing.locationBeforeTransitions.pathname
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    	push: (route) => {
    		dispatch(push(route));
			}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);