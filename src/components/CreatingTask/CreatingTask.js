import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createTask, checkState} from '../../actions/actions';
import '../../css/main.min.css';

const Title = props => <h3 className={props.class}>{props.children}</h3>;

class CreatingTask extends PureComponent {
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
			<section className="creating-task">
				<form className="" method="#">
					<div className="add-title">
						<label className="add-title__label">
							<Title class="add-title__text">Title task: </Title>
							<input
								className="add-title__field"
								type="text"
								placeholder="Enter title"
								name="title"
								value={title}
								onChange={this.handleOnChange}
								required
							/>
						</label>
					</div>
					<div className="add-description">
						<label className="add-description__label">
							<Title class="add-description__text">Description task: </Title>
							<textarea
								className="add-description__textarea"
								placeholder="Enter description"
								name="description"
								value={description}
								onChange={this.handleOnChange}
								required
							/>
						</label>
					</div>
					<div className="add-priority">
						<label className="add-priority__label">
							<Title class="add-priority__text">Priority task: </Title>
							<select
								className="add-priority__field"
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
						</label>
					</div>
					<div className="add-date">
						<label className="add-date__label">
							<Title class="add-description__text">Execution date: </Title>
							<input
								className="add-date__field"
								name="executionDate"
								value={executionDate}
								onChange={this.handleOnChange}
								type="date"
							/>
							<input
								className="add-date__field"
								name="executionTime"
								value={executionTime}
								onChange={this.handleOnChange}
								type="time"
							/>
						</label>
					</div>
					<button
						className="creating-task__btn"
						onClick={this.handleOnClickAddTask}
					>
						Add Task
					</button>
				</form>
			</section>
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
)(CreatingTask);

CreatingTask.propTypes = {
	createTask: PropTypes.func,
	checkStates: PropTypes.func,
};
