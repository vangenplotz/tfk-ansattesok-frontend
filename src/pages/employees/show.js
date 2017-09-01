import React from "react"
import PropTypes from "prop-types"
import { Container, Card, Icon, Image } from 'semantic-ui-react'
import Navigation from "../../containers/navigation/navigation"

export default class Show extends React.Component {

	componentDidMount() {
		this.props.componentDidMount();
	}

	render() {
		return <div>
			<Navigation />
			<Container>
			<Card>
				<Card.Content>
					<Card.Header>
						Matthew
					</Card.Header>
					<Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
					</Card.Meta>
					<Card.Description>
						Matthew is a musician living in Nashville.
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='user' />
						22 Friends
					</a>
				</Card.Content>
			</Card>
			{JSON.stringify(this.props.employee)}
			</Container>
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