import React from "react"
import { Checkbox, Container, Dropdown, Form, Grid, Image, Label, Menu, Search } from "semantic-ui-react"
import SearchResult from "../../components/search_result/search_result"
import Logo from "../../../assets/images/tfk_logo_rgb_pos.png"
import { Debounce } from "react-throttle"
import { Link } from "react-router"
import Navigation from "../../containers/navigation/navigation"

const departmentOptions = [
	{
		id: '1337',
		value: '1337',
		text: 'Fengsel'
	},
	{
		id: '4741',
		value: '4741',
		text: 'Nome VGS'
	}
];

// TODO: Do it dynamic yes yesh

export default class Index extends React.Component {

	state = {
		value: 'Alle typer'
	};
    // TODO: Do it dynamic yes yesh


    componentDidMount() {
		this.props.componentDidMount();
	}

	// handleChange = (e, { value }) => this.setState({ value });

	render() {
		const { activeItem } = this.state;
		return <div className="app-container">
        <Navigation />
        <Container>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column className="pull-left" width={3}>
                        <Menu size='large' pointing secondary vertical className="wrap--menu">
                            <Menu.Item>
                                <Dropdown placeholder='Velg avdeling(er)' fluid multiple search selection
                                          options={departmentOptions} />
                            </Menu.Item>
                            <Menu.Item>
                                <Form>
                                    <Form.Field>
                                        <Checkbox
                                            radio
                                            label='Alle stillingstyper'
                                            name='checkboxRadioGroup'
                                            value='Alle typer'
                                            checked={this.state.value === 'Alle typer'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox
                                            radio
                                            label='Fast ansatte'
                                            name='checkboxRadioGroup'
                                            value='Fast ansatte'
                                            checked={this.state.value === 'Fast ansatte'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox
                                            radio
                                            label='Vikarer'
                                            name='checkboxRadioGroup'
                                            value='Vikarer'
                                            checked={this.state.value === 'Vikarer'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                </Form>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column className="no-padding-right" width={13}>
                        <SearchResult numberOfHits={this.props.numberOfHits}
                                      results={this.props.results.map(x => {
																				const positions = x.positions.reduce((accumulator, currentItem) => {
																					accumulator[currentItem.departmentId] = currentItem;
																					return accumulator;
																				}, {});
																				return {
																					id: x.id,
																					name: <Link
                                              to={`/employees/${x.id}`}>{`${x.givenName} ${x.familyName}`}</Link>,
																					department: [...new Set(Object.keys(positions))].reduce((accumulator, p, index) => {
																						accumulator.push(<Link key={p}
                                                                   to={`/departments/${p}`}>{positions[p].departmentName}</Link>)
																						if (index !== Object.keys(positions).length - 1) {
																							accumulator.push(<span key={`${p}span`}>, </span>)
																						}
																						return accumulator;
																					}, []),
                                          email: <a href={`mailto:${x.email.toLowerCase()}`}>{x.email.toLowerCase()}</a>,
                                          workPhone: <a href={`tel:${x.workPhone}`}>{x.workPhone}</a>,
                                          mobilePhone: <a href={`tel:${x.mobilePhone}`}>{x.mobilePhone}</a>
																				}
																			})}
                                      headerColumns={[
																				{
																					key: 'name',
																					value: 'Navn',
																					icon: 'user outline'
																				},
																				{
																					key: 'department',
																					value: 'Avdeling',
																					icon: 'circle outline'
																				},
																				{
																					key: 'email',
																					value: 'Epost',
																					icon: 'mail outline'
																				},
																				{
																					key: 'workPhone',
																					value: 'Jobbtelefon',
																					icon: 'phone'
																				},
																				{
																					key: 'mobilePhone',
																					value: 'Mobil',
																					icon: 'mobile'
																				}
																			]}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    </div>
	}
}