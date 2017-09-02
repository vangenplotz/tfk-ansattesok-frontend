import React from "react"
import { Button } from "semantic-ui-react"
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
        return <div>
					<Button icon="angle double left" disabled={this.isPreviousDisabled()} onClick={this.onClickFirst} />
					<Button icon="angle left" disabled={this.isPreviousDisabled()} onClick={this.onClickPrevious} />
					<div>Side {parseInt(this.props.currentPage)} av {parseInt(this.props.pageCount)}</div>
					<Button icon="angle right" disabled={this.isNextDisabled()} onClick={this.onClickNext} />
					<Button icon="angle double right" disabled={this.isNextDisabled()} onClick={this.onClickLast} />
				</div>
    }
}

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	pageCount: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};