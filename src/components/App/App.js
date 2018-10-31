import React, {PureComponent} from 'react';
import '../../css/main.min.css';
import TaskList from '../TaskList/TaskList';
import CreatingTask from '../CreatingTask/CreatingTask';

const Header = props => (
	<header className="header">
		<h1 className="header__title">{props.children}</h1>
	</header>
);
class App extends PureComponent {
	render() {
		return (
			<div className="app">
				<Header>Todo List</Header>
				<main className="main">
					<CreatingTask />
					<TaskList />
				</main>
			</div>
		);
	}
}

export default App;
