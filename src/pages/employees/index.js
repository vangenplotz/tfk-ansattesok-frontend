import React from "react"
import { Search, Table, Icon } from "semantic-ui-react"
import SearchResult from "../../components/search_result/search_result"
import { Debounce } from "react-throttle"

export default class Index extends React.Component {

    render() {
        return <div>
          <Debounce time={350} handler={"onSearchChange"}>
            <Search fluid
                    loading={this.props.isLoading}
                    showNoResults={false}
                    onSearchChange={(e, data) => this.props.onChange(data.value)}
            />
          </Debounce>

            <SearchResult numberOfHits={this.props.numberOfHits}
                          results={this.props.results.map(x => {
                            return {
                              id: x.id,
                              name: `${x.givenName} ${x.familyName}`,
                              department: [...new Set([...x.positions.map(p => p.departmentName)])].join(', '),
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