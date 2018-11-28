import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import TaskFilters from '../TaskFilters/TaskFilters';
import Title from '../Title/Title';
import Description from '../Description/Description';
import Priority from '../Priority/Priority';
import ExecutionDate from '../ExecutionDate/ExecutionDate';
import ExecutionTime from '../ExecutionTime/ExecutionTime';
import CompletingTask from '../CompletingTask/CompletingTask';
import {getFilter, getFilteredTask, getTask} from '../../reducers';
import {
	overdueTask,
	filteredP2,
	filteredP1,
	filteredP3,
	setState,
} from '../../actions/actions';
import DeletingTask from '../DeletingTask/DeletingTask';

class TaskList extends PureComponent {
	componentDidMount() {
		const {setState} = this.props;

		window.addEventListener(`unload`, () => {
			setState();
		});

		this.getProps = setTimeout(() => {
			this.overdueTask = setInterval(this.checkOverdueTask, 60000); // 1min
		}, 1000); // 1s
	}

	componentWillUnmount() {
		clearInterval(this.overdueTask);
		clearTimeout(this.getProps);
	}

	checkOverdueTask = () => {
		const {task} = this.props;

		const {overdueTask} = this.props;

		const {year, month, date, hours, minutes} = this.getDate();

		const dateNow = +`${year}${month}${date}`;
		const timeNow = +`${hours}${minutes}`;

		task
			.filter(task => task.isCompleted === false)
			.map(task => ({
				date:
					task.executionDate !== `` && task.executionDate !== undefined
						? parseInt(task.executionDate.replace(/[^\d+]/g, ``), 10)
						: ``,
				time:
					task.executionTime !== `` && task.executionTime !== undefined
						? parseInt(task.executionTime.replace(/[^\d+]/g, ``), 10)
						: ``,
				id: task.id,
			}))
			.forEach(el => {
				if (el.date === `` && el.time === ``) {
					overdueTask(false, el.id);
				} else if (el.date < dateNow) {
					overdueTask(true, el.id);
				} else if (el.date === dateNow) {
					if (el.time > timeNow || el.time === ``) {
						overdueTask(false, el.id);
					} else {
						overdueTask(true, el.id);
					}
				} else {
					overdueTask(false, el.id);
				}
			});
	};

	getDate = () => {
		const year = new Date().getFullYear();

		let date = new Date().getDate();
		if (date < 10) {
			date = `0${date}`;
		}

		let month = new Date().getMonth() + 1;
		if (month < 10) {
			month = `${month}`;
		}

		let hours = new Date().getHours();
		if (hours < 10) {
			hours = `0${hours}`;
		}
		let minutes = new Date().getMinutes();
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		return {
			year,
			date,
			month,
			hours,
			minutes,
		};
	};

	filteredOnChangeTask = () => {
		const {filter, filteredP1, filteredP2, filteredP3} = this.props;
		const filterFlag = {
			p1: `P1`,
			p2: `P2`,
			p3: `P3`,
		};

		switch (filter) {
			case filterFlag.p1:
				filteredP1(filterFlag.p1);
				break;
			case filterFlag.p2:
				filteredP2(filterFlag.p2);
				break;
			case filterFlag.p3:
				filteredP3(filterFlag.p3);
				break;
			default:
				return null;
		}
	};

	render() {
		const {filter, task, filteredTask} = this.props;
		let viewTask = [];

		if (filter !== `All`) {
			viewTask = filteredTask;
		} else {
			viewTask = task;
		}

		return (
			<section className="task-list">
				<TaskFilters />
				{viewTask.map(el => (
					<div
						className={`task ${el.isCompleted ? `task--completed` : ``} ${
							el.isOverdue ? `task--overdue` : ``
						}`}
						key={el.id}
					>
						<Priority
							id={el.id}
							text={el.priority}
							filtered={this.filteredOnChangeTask}
						/>
						<DeletingTask
							id={el.id}
							priority={el.priority}
							filtered={this.filteredOnChangeTask}
						/>
						<Title
							id={el.id}
							text={el.title}
							priority={el.priority}
							filtered={this.filteredOnChangeTask}
						/>
						<Description
							id={el.id}
							text={el.description}
							priority={el.priority}
							filtered={this.filteredOnChangeTask}
						/>
						<div className="task__execution">
							<p className="task__execution-title">Execution:</p>
							<ul className="task__execution-list">
								<ExecutionDate
									id={el.id}
									text={el.executionDate}
									filtered={this.filteredOnChangeTask}
								/>
								<ExecutionTime
									id={el.id}
									text={el.executionTime}
									filtered={this.filteredOnChangeTask}
								/>
							</ul>
						</div>
						<CompletingTask
							id={el.id}
							date={el.completedDate}
							time={el.completedTime}
							getDate={this.getDate}
							filtered={this.filteredOnChangeTask}
						/>
					</div>
				))}
			</section>
		);
	}
}
const mapStateToProps = state => ({
	task: getTask(state),
	filter: getFilter(state),
	filteredTask: getFilteredTask(state),
});

const mapDispatchToProps = {
	overdueTask,
	filteredP2,
	filteredP1,
	filteredP3,
	setState,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskList);

TaskList.propTypes = {
	filter: PropTypes.string,
	filteredP1: PropTypes.func,
	filteredP2: PropTypes.func,
	filteredP3: PropTypes.func,
	filteredTask: PropTypes.array,
	overdueTask: PropTypes.func,
	setState: PropTypes.func,
	task: PropTypes.array,
};
