import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editExecutionDate} from '../../actions/actions';

class ExecutionDate extends PureComponent {
	state = {
		currentExecutionDateEdit: null,
	};

	handleOnChangeExecutionDate = e => {
		const {value} = e.target;

		this.setState({
			executionDate: value,
		});
	};

	handleOnClickExecutionDate = e => {
		const {id} = this.props;

		this.setState({
			currentExecutionDateEdit: id,
		});
	};

	handleOnBlurExecutionDate = e => {
		const {editExecutionDate, id, filtered, priority} = this.props;
		const {executionDate} = this.state;

		editExecutionDate(executionDate, id, priority);
		filtered();

		this.setState({
			currentExecutionDateEdit: null,
		});
	};

	handleOnKeyDownExecutionDate = e => {
		const keyEnter = 13;
		const {editExecutionDate, id, filtered, priority} = this.props;
		const {executionDate} = this.state;

		if (e.keyCode === keyEnter) {
			editExecutionDate(executionDate, id, priority);
			filtered();

			this.setState({
				currentExecutionDateEdit: null,
			});
		}
	};

	render() {
		const {currentExecutionDateEdit} = this.state;
		const {id, text} = this.props;

		return (
			<li className="execution__item">
				{currentExecutionDateEdit === id ? (
					<input
						className="task__edit--date"
						name="executionDate"
						onChange={this.handleOnChangeExecutionDate}
						onKeyDown={this.handleOnKeyDownExecutionDate}
						onBlur={this.handleOnBlurExecutionDate}
						autoFocus
						type="date"
					/>
				) : (
					<span
						className="execution__date"
						onClick={this.handleOnClickExecutionDate}
					>
						Date: {text}
					</span>
				)}
			</li>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	editExecutionDate,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExecutionDate);

ExecutionDate.propTypes = {
	editExecutionDate: PropTypes.func,
	filtered: PropTypes.func,
	id: PropTypes.number.isRequired,
	text: PropTypes.string,
};
