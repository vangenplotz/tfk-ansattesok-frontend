import React from "react"
import Header from "../../components/header/header"
import Navigation from "../../containers/navigation/navigation"
import { Container, Card } from "semantic-ui-react"

export default class Show extends React.Component {

	componentDidMount() {
		this.props.componentDidMount();
	}

	render() {
		return <div>
			<Header />
			<Navigation />
			<Container>
				<Card>
					<Card.Content>
						<Card.Header>
							{this.props.department && this.props.department.name}
						</Card.Header>
						<Card.Meta>
						</Card.Meta>
						{/*<Card.Description>*/}
							{/*<List>*/}
								{/*<List.Item>*/}
									{/*<List.Icon name="mail outline" />*/}
									{/*<List.Content>*/}
										{/*<a href={this.props.employee && `mailto:${this.props.employee.email}`}>{this.props.employee && this.props.employee.email.toLowerCase()}</a>*/}
									{/*</List.Content>*/}
								{/*</List.Item>*/}
								{/*<List.Item>*/}
									{/*<List.Icon name="phone" />*/}
									{/*<List.Content>*/}
										{/*<a href={this.props.employee && `tel:${this.props.employee.workPhone}`}>{this.props.employee && this.props.employee.workPhone}</a>*/}
									{/*</List.Content>*/}
								{/*</List.Item>*/}
								{/*<List.Item>*/}
									{/*<List.Icon name="mobile" />*/}
									{/*<List.Content>*/}
										{/*<a href={this.props.employee && `tel:${this.props.employee.mobilePhone}`}>{this.props.employee && this.props.employee.mobilePhone}</a>*/}
									{/*</List.Content>*/}
								{/*</List.Item>*/}
							{/*</List>*/}
						{/*</Card.Description>*/}
					</Card.Content>
				</Card>
			</Container>
		</div>
	}
}