import React from "react"
import PropTypes from "prop-types"

export default class Show extends React.Component {

	componentDidMount() {
		this.props.componentDidMount();
	}

	render() {
		return <div>
			{JSON.stringify(this.props.employee)}
		</div>
	}
}

Show.propTypes = {
	employee: PropTypes.shape({
		id: PropTypes.string,
		email: PropTypes.string,
		givenName: PropTypes.string,
		familyName: PropTypes.string,
		mobilePhone: PropTypes.string,
		workPhone: PropTypes.string,
		positions: PropTypes.arrayOf(PropTypes.shape({
			departmentId: PropTypes.string,
			info: PropTypes.string,
			type: PropTypes.string,
			departmentName: PropTypes.string
		})),
	})
};