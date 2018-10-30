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
			getDataId,
			getDate,
			completedTask,
			completedTaskDate,
			completedTaskTime,
			task,
			filtered,
		} = this.props;
		const {year, month, date, hours, minutes} = getDate();

		const indexTask = task.findIndex(x => x.id === getDataId(e));

		if (task[indexTask].isCompleted) {
			completedTask(false, getDataId(e));
			completedTaskDate(``, getDataId(e));
			completedTaskTime(``, getDataId(e));
			filtered();
		} else {
			completedTask(true, getDataId(e));
			completedTaskDate(`${year}-${month}-${date}`, getDataId(e));
			completedTaskTime(`- ${hours}:${minutes}`, getDataId(e));
			filtered();
		}
	};

	render() {
		const {id, date, time} = this.props;

		return (
			<div>
				<p className="task__completed-date">
					<span>
						Date completed: {date} {time}
					</span>
				</p>
				<button
					className="task__completed-btn"
					data-id={id}
					onClick={this.handleOnClickCompleted}
				>
					Completed
				</button>
			</div>
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
	getDataId: PropTypes.func,
	getDate: PropTypes.func,
	id: PropTypes.number,
	task: PropTypes.array,
	time: PropTypes.string,
	filtered: PropTypes.func,
};
