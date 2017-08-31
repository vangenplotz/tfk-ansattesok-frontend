import React from "react"
import { Table, Icon } from "semantic-ui-react"
import { Link } from "react-router"

export default class Index extends React.Component {

	componentDidMount() {
		this.props.componentDidMount();
	}

	renderBody() {
		return this.props.departments
				.filter(department => !!department.name)
				.map(department => <Table.Row key={department.id}>
					<Table.Cell><Link to={`/departments/${department.id}`}>{department.name}</Link></Table.Cell>
					<Table.Cell><Icon name="mail outline" /> <a href="mailto:post@t-fk.no">post@t-fk.no</a></Table.Cell>
					<Table.Cell><Icon name="world" /><a href="http://telemark.no" target="_blank">www.telemark.no</a></Table.Cell>
				</Table.Row>);
	}

	render() {
		return <div>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan="3">Avdelinger</Table.HeaderCell>
					</Table.Row>
					<Table.Row>
						<Table.HeaderCell>Navn</Table.HeaderCell>
						<Table.HeaderCell>E-post</Table.HeaderCell>
						<Table.HeaderCell>Nettside</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{this.renderBody()}
				</Table.Body>
			</Table>
		</div>
	}
}