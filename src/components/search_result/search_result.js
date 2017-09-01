import React from "react"
import PropTypes from "prop-types"
import { Table, Icon } from "semantic-ui-react"

export default class SearchResult extends React.Component {

	renderHeader() {
		return this.props.headerColumns.map(x => <Table.HeaderCell key={x.key}>{x.value}</Table.HeaderCell>)
	}

	renderIcon(data, index) {
		if (!!this.props.headerColumns[index].icon && !!data[this.props.headerColumns[index].key]) {
			return <Icon name={this.props.headerColumns[index].icon} />
		}
		return null;
	}

	renderCells(data) {
		return this.props.headerColumns.map((x, index) => {
			return <Table.Cell key={x.key}>{this.renderIcon(data, index)} {data[this.props.headerColumns[index].key]}</Table.Cell>
		});
	}

	renderResults() {
		return this.props.results.map(x => <Table.Row key={x.id}>{this.renderCells(x)}</Table.Row>)
	}

	render() {
		return <Table basic='very'>
			<Table.Header>
				<Table.Row>
					{this.renderHeader()}
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{this.renderResults()}
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan={this.props.headerColumns.length}>Søkeresultat: {this.props.numberOfHits} treff</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		</Table>
	}
}

SearchResult.propTypes = {
	numberOfHits: PropTypes.number.isRequired,
	results: PropTypes.array,
	headerColumns: PropTypes.array
};