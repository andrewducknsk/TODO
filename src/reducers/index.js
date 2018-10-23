import {combineReducers} from 'redux';
import {TODO} from './createTask/createTask'

export default combineReducers({
    TODO,
});

export const getTask = state => state.TODO.task;

export const getFilter = state => state.TODO.filter;

export const getFilteredTask = state => state.TODO.filteredTask;