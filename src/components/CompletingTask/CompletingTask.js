import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {
	completedTask,
	completedTaskDate,
	completedTaskTime,
} from '../../actions/actions';
import {getTask} from '../../reducers';

class CompletingTask extends PureComponent {
	handleOnClickCompleted = e => {
		const {
			id,
			getDate,
			completedTask,
			completedTaskDate,
			completedTaskTime,
			task,
			filtered,
		} = this.props;
		const {year, month, date, hours, minutes} = getDate();

		const indexTask = task.findIndex(x => x.id === id);

		if (task[indexTask].isCompleted) {
			completedTask(false, id);
			completedTaskDate(``, id);
			completedTaskTime(``, id);
			filtered();
		} else {
			completedTask(true, id);
			completedTaskDate(`${year}-${month}-${date}`, id);
			completedTaskTime(`- ${hours}:${minutes}`, id);
			filtered();
		}
	};

	render() {
		const {date, time} = this.props;

		return (
			<React.Fragment>
				<p className="task__completed-date">
					Date completed: {date} {time}
				</p>
				<button
					className="task__completed-btn"
					onClick={this.handleOnClickCompleted}
				>
					Completed
				</button>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	task: getTask(state),
});

const mapDispatchToProps = {
	completedTask,
	completedTaskDate,
	completedTaskTime,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CompletingTask);

CompletingTask.propTypes = {
	completedTask: PropTypes.func,
	completedTaskDate: PropTypes.func,
	completedTaskTime: PropTypes.func,
	data: PropTypes.string,
	getDate: PropTypes.func,
	id: PropTypes.number.isRequired,
	task: PropTypes.array,
	time: PropTypes.string,
	filtered: PropTypes.func,
};
