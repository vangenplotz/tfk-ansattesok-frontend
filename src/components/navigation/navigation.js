import React from "react"
import { Container, Menu, Label } from "semantic-ui-react"

export default class Navigation extends React.Component {
    render() {
        return <div className="wrap--nav">
					<Container>
						<Menu borderless pointing compact secondary>
							<Menu.Item
									name='Ansattsøk'
									active={!!this.props.pathname.match('/employees')}
									onClick={() => this.props.push('/employees')}>
								Ansattsøk
								<Label color='black'>{this.props.employeeCount}</Label>
							</Menu.Item>
							<Menu.Item
									name='Avdelinger'
									active={!!this.props.pathname.match('/departments')}
									onClick={() => this.props.push('/departments')}>
								Avdelinger
								<Label color='black'>{this.props.departmentCount}</Label>
							</Menu.Item>
						</Menu>
					</Container>
				</div>
    }
}