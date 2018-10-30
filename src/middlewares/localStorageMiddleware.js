import {loadingState, checkState, setState} from '../actions/actions';
import {getLocalState, templateState} from '../localStorage';

const localStorageMiddleware = store => next => action => {
	switch (action.type) {
		case checkState.toString():
			if (getLocalState !== null) {
				store.dispatch(loadingState(getLocalState.TODO));
			} else {
				store.dispatch(loadingState(templateState.TODO));
			}
			break;
		case setState.toString():
			localStorage.setItem(`state`, JSON.stringify(store.getState()));
			break;
		default:
			return next(action);
	}

	return next(action);
};

export default localStorageMiddleware;
