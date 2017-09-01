import React from "react"
import { Container, Grid, Search } from "semantic-ui-react"
import SearchResult from "../../components/search_result/search_result"
import { Link } from "react-router"
import Navigation from "../../containers/navigation/navigation"
import SearchFilter from "../../containers/search_filter/search_filter"
import Header from "../../components/header/header"
import { Debounce } from "react-throttle"

export default class Index extends React.Component {

	componentDidMount() {
		this.props.componentDidMount();
	}

	render() {
		return <div className="app-container">
			<Header component={<Debounce time={300} handler={'onSearchChange'}>
				<Search className="searchbar--fluid"
								fluid
								loading={this.props.isLoading}
								showNoResults={false}
								onSearchChange={(e, data) => this.props.onChange(data.value)}
								placeholder="Søk etter ansatte"
				/>
			</Debounce>} />
			<Navigation />
			<Container>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column className="pull-left" width={3}>
							<SearchFilter departments={this.props.departments} />
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