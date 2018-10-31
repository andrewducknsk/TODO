import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editExecutionTime} from '../../actions/actions';

class ExecutionTime extends PureComponent {
	state = {
		currentExecutionTimeEdit: null,
		executionTime: this.props.executionTime,
	};

	elemPriority = e =>
		e.target.parentElement.parentElement.parentElement.parentElement
			.querySelector(`.task__priority`)
			.textContent.toLowerCase();

	handleOnChangeExecutionTime = e => {
		const {value} = e.target;

		this.setState({
			executionTime: value,
		});
	};

	handleOnClickExecutionTime = e => {
		const {id} = this.props;

		this.setState({
			currentExecutionTimeEdit: id,
		});
	};

	handleOnBlurExecutionTime = e => {
		const {editExecutionTime, id, filtered} = this.props;
		const {executionTime} = this.state;

		editExecutionTime(executionTime, id, this.elemPriority);
		filtered();

		this.setState({
			currentExecutionTimeEdit: null,
		});
	};

	handleOnKeyDownExecutionTime = e => {
		const keyEnter = 13;
		const {editExecutionTime, id, filtered} = this.props;
		const {executionTime} = this.state;

		if (e.keyCode === keyEnter) {
			editExecutionTime(executionTime, id, this.elemPriority);
			filtered();

			this.setState({
				currentExecutionTimeEdit: null,
			});
		}
	};

	render() {
		const {currentExecutionTimeEdit, executionTime} = this.state;
		const {id, text} = this.props;

		return (
			<li className="execution__item">
				{currentExecutionTimeEdit === id ? (
					<input
						className="task__edit--time"
						name="executionTime"
						value={executionTime}
						onChange={this.handleOnChangeExecutionTime}
						onKeyDown={this.handleOnKeyDownExecutionTime}
						onBlur={this.handleOnBlurExecutionTime}
						autoFocus
						type="time"
					/>
				) : (
					<span
						className="execution__date"
						onClick={this.handleOnClickExecutionTime}
					>
						Time: {text}
					</span>
				)}
			</li>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	editExecutionTime,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExecutionTime);

ExecutionTime.propTypes = {
	editExecutionTime: PropTypes.func,
	filtered: PropTypes.func,
	id: PropTypes.number.isRequired,
	text: PropTypes.string,
};
