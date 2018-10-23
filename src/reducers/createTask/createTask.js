import {handleActions} from 'redux-actions';
import {
    completedTask,
    completedTaskDate,
    completedTaskTime,
    createTask,
    deleteTask,
    editDescription,
    editExecutionDate,
    editExecutionTime,
    editPriority,
    editTitle, filteredAll, filteredP1, filteredP2, filteredP3, loadingState, overdueTask
} from "../../actions/actions";

export const TODO = handleActions({
        [loadingState]: (state, action) => ({
            ...state,
            task: action.payload.task,
            filter: action.payload.filter,
            filteredTask: action.payload.filteredTask
        }),
        [createTask]: (state, action) => ({
            ...state,
            task: [...state.task, action.payload]
        }),
        [editPriority]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    priority: action.payload.priority
                } : task)
        }),
        [editTitle]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    title: action.payload.title
                } : task)
        }),
        [editDescription]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    description: action.payload.description
                } : task)
        }),
        [editExecutionDate]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    executionDate: action.payload.executionDate
                } : task)
        }),
        [editExecutionTime]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    executionTime: action.payload.executionTime
                } : task)
        }),
        [deleteTask]: (state, action) => ({
            ...state,
            task: state.task.filter(item => item.id !== action.meta.id)
        }),
        [completedTask]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    isCompleted: action.payload.completed
                } : task)
        }),
        [completedTaskDate]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    completedDate: action.payload.completedDate
                } : task)
        }),
        [completedTaskTime]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    completedTime: action.payload.completedTime
                } : task)
        }),
        [overdueTask]: (state, action) => ({
            ...state,
            task: state.task.map(task => task.id === action.meta.id ?
                {
                    ...task,
                    isOverdue: action.payload.overdue
                } : task)
        }),
        [filteredAll]: (state, action) => ({
            ...state,
            filter: action.payload,
        }),
        [filteredP1]: (state, action) => ({
            ...state,
            filter: action.payload,
            filteredTask: state.task.filter(task => task.priority === action.payload)
        }),
        [filteredP2]: (state, action) => ({
            ...state,
            filter: action.payload,
            filteredTask: state.task.filter(task => task.priority === action.payload)
        }),
        [filteredP3]: (state, action) => ({
            ...state,
            filter: action.payload,
            filteredTask: state.task.filter(task => task.priority === action.payload)
        }),
    },
    {
        task: [],
        filter: `All`,
        filteredTask: []
    });