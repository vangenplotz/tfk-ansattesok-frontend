import React from "react"
import { Checkbox, Dropdown, Form, Menu } from "semantic-ui-react"

export default class SearchFilter extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <Menu size="large" pointing secondary vertical className="wrap--menu">
			<Menu.Item>
				<Dropdown placeholder="Velg avdeling(er)" fluid multiple search selection
									options={this.props.departments}
									onChange={(e, input) => this.props.onChange('departmentIds', input.value)}
				/>
			</Menu.Item>
			<Menu.Item>
				<Form>
					<Form.Field>
						<Checkbox
								label="Fast ansatte"
								name="checkboxRadioGroup"
								value="Fast ansatte"
								checked={this.props.fullTime}
								onChange={(e, v) => this.props.onChange('fullTime', v.checked)}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox
								label="Vikarer"
								name="checkboxRadioGroup"
								value="Vikarer"
								checked={this.props.partTime}
								onChange={(e, v) => this.props.onChange('partTime', v.checked)}
						/>
					</Form.Field>
				</Form>
			</Menu.Item>
		</Menu>
	}
}