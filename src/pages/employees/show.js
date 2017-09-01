import React from "react"
import PropTypes from "prop-types"
import { Card, Container, List } from 'semantic-ui-react'
import Navigation from "../../containers/navigation/navigation"
import Header from "../../components/header/header"

export default class Show extends React.Component {

	componentDidMount() {
		this.props.componentDidMount();
	}

	getFullName() {
		return `${this.props.employee.givenName} ${this.props.employee.familyName}`;
	}

	getPositions() {
		return this.props.employee.positions.map((position, index) => <Card.Content key={index}>
			<Card.Description>
				<List>
					<List.Item>
						<List.Icon name="circle outline" />
						<List.Content>{position.departmentName}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="address card" />
						<List.Content>{position.info}</List.Content>
					</List.Item>
					<List.Item>
						<List.Icon name="star" />
						<List.Content>{position.type}</List.Content>
					</List.Item>
				</List>
			</Card.Description>
		</Card.Content>)
	}

	render() {
		return <div>
			<Header />
			<Navigation />
			<Container>
				<Card>
					<Card.Content>
						<Card.Header>
							{this.props.employee && this.getFullName()}
						</Card.Header>
						<Card.Meta>
						</Card.Meta>
						<Card.Description>
							<List>
								<List.Item>
									<List.Icon name="mail outline" />
									<List.Content>
										<a href={this.props.employee && `mailto:${this.props.employee.email}`}>{this.props.employee && this.props.employee.email.toLowerCase()}</a>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="phone" />
									<List.Content>
										<a href={this.props.employee && `tel:${this.props.employee.workPhone}`}>{this.props.employee && this.props.employee.workPhone}</a>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="mobile" />
									<List.Content>
										<a href={this.props.employee && `tel:${this.props.employee.mobilePhone}`}>{this.props.employee && this.props.employee.mobilePhone}</a>
									</List.Content>
								</List.Item>
							</List>
						</Card.Description>
					</Card.Content>

					{this.props.employee && this.getPositions()}
				</Card>
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