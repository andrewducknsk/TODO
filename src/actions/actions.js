import {createActions} from 'redux-actions';

const actionCreators = createActions({
	APP: {
		STATE: {
			CHECK: undefined,
			LOAD: undefined,
			SET: undefined,
		},
		CREATE_TASK: {
			ADD: undefined,
		},
		EDIT_TASK: {
			TITLE: [
				title => ({title}),
				(title, id, filterPriority) => ({id, filterPriority}),
			],
			PRIORITY: [
				priority => ({priority}),
				(priority, id, filterPriority) => ({id, filterPriority}),
			],
			DESCRIPTION: [
				description => ({description}),
				(description, id, filterPriority) => ({id, filterPriority}),
			],
			EXECUTION_DATE: [
				executionDate => ({executionDate}),
				(executionDate, id, filterPriority) => ({id, filterPriority}),
			],
			EXECUTION_TIME: [
				executionTime => ({executionTime}),
				(executionTime, id, filterPriority) => ({id, filterPriority}),
			],
		},
		COMPLETED_TASK: {
			COMPLETED: [
				completed => ({completed}),
				(completed, id, filterPriority) => ({id, filterPriority}),
			],
			COMPLETED_DATE: [
				completedDate => ({completedDate}),
				(completedDate, id, filterPriority) => ({id, filterPriority}),
			],
			COMPLETED_TIME: [
				completedTime => ({completedTime}),
				(completedTime, id, filterPriority) => ({id, filterPriority}),
			],
		},
		OVERDUE_TASK: {
			OVERDUE: [overdue => ({overdue}), (overdue, id) => ({id})],
		},
		DELETED_TASK: {
			DELETE: [
				deleteTask => ({deleteTask}),
				(deleteTask, id, filterPriority) => ({id, filterPriority}),
			],
		},
		FILTERED_TASK: {
			ALL: undefined,
			P1: undefined,
			P2: undefined,
			P3: undefined,
		},
	},
});

export const setState = actionCreators.app.state.set;

export const checkState = actionCreators.app.state.check;

export const loadingState = actionCreators.app.state.load;

export const createTask = actionCreators.app.createTask.add;

export const createTaskP1 = actionCreators.app.createTask.p1;

export const createTaskP2 = actionCreators.app.createTask.p2;

export const createTaskP3 = actionCreators.app.createTask.p3;

export const editTitle = actionCreators.app.editTask.title;

export const editDescription = actionCreators.app.editTask.description;

export const editPriority = actionCreators.app.editTask.priority;

export const editExecutionDate = actionCreators.app.editTask.executionDate;

export const editExecutionTime = actionCreators.app.editTask.executionTime;

export const deleteTask = actionCreators.app.deletedTask.delete;

export const completedTask = actionCreators.app.completedTask.completed;

export const completedTaskDate = actionCreators.app.completedTask.completedDate;

export const completedTaskTime = actionCreators.app.completedTask.completedTime;

export const overdueTask = actionCreators.app.overdueTask.overdue;

export const filteredAll = actionCreators.app.filteredTask.all;

export const filteredP1 = actionCreators.app.filteredTask.p1;

export const filteredP2 = actionCreators.app.filteredTask.p2;

export const filteredP3 = actionCreators.app.filteredTask.p3;
