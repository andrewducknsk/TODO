import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editPriority} from '../../actions/actions';

const EditPriority = props => {
	return (
		<select
			name="task-priority"
			onChange={props.onChange}
			onSelect={props.onSelected}
			onBlur={props.onBlur}
			autoFocus
		>
			<option value="P1">P1</option>
			<option value="P2">P2</option>
			<option value="P3">P3</option>
		</select>
	);
};

class Priority extends PureComponent {
	state = {
		currentPriorityEdit: null,
		priority: ``,
	};

	handleOnChangePriority = e => {
		const {value} = e.target;

		this.setState({
			priority: value,
		});
	};

	handleOnClickPriority = e => {
		const {id} = this.props;

		this.setState({
			currentPriorityEdit: id,
		});
	};

	handleOnBlurPriority = e => {
		const {value} = e.target;
		const {editPriority, filtered} = this.props;
		const {currentPriorityEdit} = this.state;

		editPriority(value, currentPriorityEdit);
		filtered();

		this.setState({
			currentPriorityEdit: null,
			currentPriorityValue: ``,
		});
	};

	render() {
		const {id, text} = this.props;
		const {currentPriorityEdit} = this.state;

		return (
			<React.Fragment>
				{currentPriorityEdit === id ? (
					<EditPriority
						onChange={this.handleOnChangePriority}
						onBlur={this.handleOnBlurPriority}
					/>
				) : (
					<p
						className={`task__priority task__priority--${text.toLowerCase()}`}
						onClick={this.handleOnClickPriority}
					>
						{text}
					</p>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	editPriority,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Priority);

Priority.propTypes = {
	editPriority: PropTypes.func,
	filtered: PropTypes.func,
	id: PropTypes.number.isRequired,
	text: PropTypes.string,
};
