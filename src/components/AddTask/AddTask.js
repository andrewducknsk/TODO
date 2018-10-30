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

	handleOnChangeTitle = e => {
		const {value} = e.target;

		this.setState({
			title: value,
		});
	};

	handleOnChangeDescription = e => {
		const {value} = e.target;

		this.setState({
			description: value,
		});
	};

	handelOnSelectPriority = e => {
		const {value} = e.target;

		this.setState({
			priority: value,
		});
	};

	handleOnChangeDate = e => {
		const {value} = e.target;

		this.setState({
			executionDate: value,
		});
	};

	handleOnChangeTime = e => {
		const {value} = e.target;

		this.setState({
			executionTime: value,
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
									value={title}
									onChange={this.handleOnChangeTitle}
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
									value={description}
									onChange={this.handleOnChangeDescription}
									required
								/>
							</label>
						</div>
						<div className="task-priority">
							<p className="task-priority__text">Priority task: </p>
							<select
								className="task-priority__field"
								value={priority}
								onChange={this.handelOnSelectPriority}
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
									value={executionDate}
									onChange={this.handleOnChangeDate}
									type="date"
								/>
								<input
									className="task-date__field"
									value={executionTime}
									onChange={this.handleOnChangeTime}
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
