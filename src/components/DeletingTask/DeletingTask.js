import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {deleteTask} from '../../actions/actions';

class DeletingTask extends PureComponent {
	handleOnClickDelete = e => {
		const {deleteTask, id, priority, filtered} = this.props;

		deleteTask(true, id, priority);
		filtered();
	};

	render() {
		return (
			<React.Fragment>
				<button className="task__delete-btn" onClick={this.handleOnClickDelete}>
					Delete
				</button>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	deleteTask,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeletingTask);

DeletingTask.propTypes = {
	deleteTask: PropTypes.func.isRequired,
	filtered: PropTypes.func,
	priority: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
