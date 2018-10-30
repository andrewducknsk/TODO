import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createTask, checkState} from '../../actions/actions';
import '../../css/main.min.css';

class AddTask extends PureComponent {
	state = {
		id: Date.now(),
		title: ``,
		description: ``,
		priority: ``,
		executionDate: ``,
		executionTime: ``,
		isCompleted: false,
		isOverdue: false,
		completedDate: ``,
		completedTime: ``,
	};

	componentDidMount() {
		const {checkState} = this.props;

		checkState();
	}

	handleOnChange = e => {
		const {value, name} = e.target;

		this.setState({
			[name]: value,
		});
	};

	handleOnClickAddTask = e => {
		const {createTask} = this.props;
		const {title, description, priority, id} = this.state;

		if (title !== `` && description !== `` && priority !== ``) {
			e.preventDefault();

			createTask(this.state);

			this.setState({
				id: id + 1,
				title: ``,
				description: ``,
				priority: ``,
				executionDate: ``,
				executionTime: ``,
			});
		}
	};

	render() {
		const {
			title,
			description,
			priority,
			executionDate,
			executionTime,
		} = this.state;

		return (
			<div className="app">
				<section className="add-task">
					<form method="#">
						<div className="task-title">
							<label className="task-title__label">
								<p className="task-title__text">Title task: </p>
								<input
									className="task-title__field"
									type="text"
									placeholder="Enter title"
									name="title"
									value={title}
									onChange={this.handleOnChange}
									required
								/>
							</label>
						</div>
						<div className="task-description">
							<label className="task-description__label">
								<p className="task-description__text">Description task: </p>
								<textarea
									className="task-description__textarea"
									placeholder="Enter description"
									name="description"
									value={description}
									onChange={this.handleOnChange}
									required
								/>
							</label>
						</div>
						<div className="task-priority">
							<p className="task-priority__text">Priority task: </p>
							<select
								className="task-priority__field"
								name="priority"
								value={priority}
								onChange={this.handleOnChange}
								required
							>
								<option value="" disabled />
								<option value="P1">P1</option>
								<option value="P2">P2</option>
								<option value="P3">P3</option>
							</select>
						</div>
						<div className="task-date">
							<label className="task-date__label">
								<p className="task-date__text">Execution date: </p>
								<input
									className="task-date__field"
									name="executionDate"
									value={executionDate}
									onChange={this.handleOnChange}
									type="date"
								/>
								<input
									className="task-date__field"
									name="executionTime"
									value={executionTime}
									onChange={this.handleOnChange}
									type="time"
								/>
							</label>
						</div>
						<button
							className="add-task__btn"
							onClick={this.handleOnClickAddTask}
						>
							Add Task
						</button>
					</form>
				</section>
			</div>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
	checkState,
	createTask,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTask);

AddTask.propTypes = {
	createTask: PropTypes.func,
	checkStates: PropTypes.func,
};
