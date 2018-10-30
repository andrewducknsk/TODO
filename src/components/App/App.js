import React, {PureComponent} from 'react';
import '../../css/main.min.css';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';

class App extends PureComponent {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<h1 className="app-header__title">Todo List</h1>
				</header>
				<main className="app-main">
					<AddTask />
					<TaskList />
				</main>
			</div>
		);
	}
}

export default App;
