import React from "react"
import { Search } from "semantic-ui-react"
import SearchResult from "../../components/search_result/search_result"
import { Debounce } from "react-throttle"
import { Link } from "react-router"

export default class Index extends React.Component {

	render() {
		return <div>
      <Debounce time={300} handler={"onSearchChange"}>
        <Search fluid
                loading={this.props.isLoading}
                showNoResults={false}
                onSearchChange={(e, data) => this.props.onChange(data.value)}
        />
      </Debounce>

      <SearchResult numberOfHits={this.props.numberOfHits}
                    results={this.props.results.map(x => {
                      const positions = x.positions.reduce((accumulator, currentItem) => {
                        accumulator[currentItem.departmentId] = currentItem;
                        return accumulator;
                      }, {});
											return {
												id: x.id,
												name: <Link to={`/employees/${x.id}`}>{`${x.givenName} ${x.familyName}`}</Link>,
                        department: [...new Set(Object.keys(positions))].reduce((accumulator, p, index) => {
                          accumulator.push(<Link key={p} to={`/departments/${p}`}>{positions[p].departmentName}</Link>)
                          if (index !== Object.keys(positions).length - 1) {
                            accumulator.push(<span key={`${p}span`}>, </span>)
                          }
                          return accumulator;
                        }, []),
												email: x.email.toLowerCase(),
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
    </div>
	}
}