import React from "react"
import { Button, Menu } from "semantic-ui-react"
import PropTypes from "prop-types"

export default class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.onClickLast = this.onClickLast.bind(this);
		this.onClickNext = this.onClickNext.bind(this);
		this.onClickFirst = this.onClickFirst.bind(this);
		this.onClickPrevious = this.onClickPrevious.bind(this);
	}

		isPreviousDisabled() {
			return (this.props.currentPage - 1) === 0;
		}

		isNextDisabled() {
			return this.props.pageCount === this.props.currentPage;
		}

		onClickFirst() {
			if (this.isPreviousDisabled()) {
				return;
			}
			this.props.onChange(1);
		}

		onClickPrevious() {
			if (this.isPreviousDisabled()) {
				return;
			}
			this.props.onChange(this.props.currentPage - 1);
		}

		onClickNext() {
			if (this.isNextDisabled()) {
				return;
			}
			this.props.onChange(this.props.currentPage + 1);
		}

		onClickLast() {
			if (this.isNextDisabled()) {
				return;
			}
			this.props.onChange(this.props.pageCount);
		}

    render() {
        return <Menu fluid widths={3} text pagination>
			<Menu.Menu position='left'>
				<Menu.Item>
					<Button icon="angle double left" disabled={this.isPreviousDisabled()} onClick={this.onClickFirst} />
				</Menu.Item>
				<Menu.Item>
					<Button icon="angle left" disabled={this.isPreviousDisabled()} onClick={this.onClickPrevious} />
				</Menu.Item>
			</Menu.Menu>
			<Menu.Menu>
				<Menu.Item>
					<div>Side {parseInt(this.props.currentPage)} av {parseInt(this.props.pageCount)}</div>
				</Menu.Item>
			</Menu.Menu>
					<Menu.Menu position='right'>
						<Menu.Item>
							<Button icon="angle right" disabled={this.isNextDisabled()} onClick={this.onClickNext} />
						</Menu.Item>
						<Menu.Item position='right'>
							<Button icon="angle double right" disabled={this.isNextDisabled()} onClick={this.onClickLast} />
						</Menu.Item>
					</Menu.Menu>
				</Menu>
    }
}

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	pageCount: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};