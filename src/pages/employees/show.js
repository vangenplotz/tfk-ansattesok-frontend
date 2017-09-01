import React from "react"
import PropTypes from "prop-types"
import { List, Container, Card, Icon, Image } from 'semantic-ui-react'
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
						Dynamisk Fullname
					</Card.Header>
					<Card.Meta>
        <span className='date'>
          Fagarbeider
        </span>
					</Card.Meta>
					<Card.Description>
						<List>
							<List.Item>
								<List.Icon name='users' />
								<List.Content>Nome VGS</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='marker' />
								<List.Content>Adresse</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='circle thin' />
								<List.Content>
									Fast ansatt
								</List.Content>
							</List.Item>
						</List>
					</Card.Description>
				</Card.Content>
				<Card.Content>
					<List>
						<List.Item>
							<List.Icon name='at' />
							<List.Content>
								<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='phone' />
							<List.Content>
								<a href='tel:0004740000000'>400 00 000</a>
							</List.Content>
						</List.Item>
					</List>
				</Card.Content>
			</Card>
			</Container>
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