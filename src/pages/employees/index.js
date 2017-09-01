import "./index.scss"
import React from "react"
import { Search, Container, Label, Menu, Grid, Image, Form, Checkbox, Dropdown } from "semantic-ui-react"
import SearchResult from "../../components/search_result/search_result"
import Logo from "../../../assets/images/tfk_logo_rgb_pos.png"

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

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name })
    }

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { activeItem } = this.state;

        return <div className="app-container">

            <Container>
                <Grid columns={2}
                      verticalAlign="bottom"
                >
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image
                                src={Logo}
                                as='a'
                                href='/'
                            />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Search className="searchbar--fluid"
                                    fluid
                                    loading={this.props.isLoading}
                                    showNoResults={false}
                                    onSearchChange={(e, data) => this.props.onChange(data.value)}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            <div className="wrap--nav">
                <Container>
                <Menu borderless pointing compact secondary>
                    <Menu.Item
                        name='Ansattsøk'
                        active={true}
                        onClick={this.handleItemClick}>
                        Ansattsøk
                        <Label color='black'>1337</Label>
                    </Menu.Item>
                    <Menu.Item
                        name='Avdelinger'
                        active={activeItem === 'Avdelinger'}
                        onClick={this.handleItemClick}>
                        Avdelinger
                        <Label color='black'>51</Label>
                    </Menu.Item>
                </Menu>
                </Container>
            </div>

            <Container>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Menu size='large' pointing secondary vertical className="wrap--menu">
                                <Menu.Item>
                                    <Dropdown placeholder='Velg avdeling(er)' fluid multiple search selection options={departmentOptions}  />
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
                        <Grid.Column width={12}>
                            <SearchResult numberOfHits={this.props.numberOfHits}
                                          results={this.props.results.map(x => {
                                              return {
                                                  id: x.id,
                                                  name: `${x.givenName} ${x.familyName}`,
                                                  department: [...new Set([...x.positions.map(p => p.departmentName)])].join(', '),
                                                  email: x.email,
                                                  workPhone: x.workPhone,
                                                  mobilePhone: x.mobilePhone
                                              }
                                          })}
                                          headerColumns={[
                                              {
                                                  key: 'name',
                                                  value: 'Navn',
                                                  icon: 'user'
                                              },
                                              {
                                                  key: 'department',
                                                  value: 'Avdeling',
                                                  icon: 'briefcase'
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