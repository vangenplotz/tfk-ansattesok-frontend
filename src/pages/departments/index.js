import React from "react"
import { Checkbox, Icon, Table, Container, Dropdown, Form, Grid, Image, Label, Menu, Search } from "semantic-ui-react"
import Logo from "../../../assets/images/tfk_logo_rgb_pos.png"
import { Debounce } from "react-throttle"
import { Link } from "react-router"
import Navigation from "../../containers/navigation/navigation"

export default class Index extends React.Component {

    state = {
        value: 'Alle'
    };
    // TODO: Do it dynamic yes yesh


    componentDidMount() {
		this.props.componentDidMount();
	}

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name })
    }

    handleChange = (e, { value }) => this.setState({ value });


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
        const { activeItem } = this.state;

        return <div className="app-container">
			<Container>
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
			</Container>
		</div>
	}
}