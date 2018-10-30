import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editTitle} from '../../actions/actions';

class Title extends PureComponent {
	state = {
		currentTitleEdit: null,
		title: ``,
	};

	handleOnChangeTitle = e => {
		const {value} = e.target;

		this.setState({
			title: value,
		});
	};

	handleOnClickTitle = e => {
		const {getDataId} = this.props;

		this.setState({
			currentTitleEdit: getDataId(e),
		});
	};

	handleOnBlurTitle = e => {
		const {editTitle, getDataId, filtered, getElemPriority} = this.props;
		const {title} = this.state;

		editTitle(title, getDataId(e), getElemPriority(e));
		filtered();

		this.setState({
			currentTitleEdit: null,
		});
	};

	handleOnKeyDownTitle = e => {
		const keyEnter = 13;
		const {editTitle, getDataId, filtered, getElemPriority} = this.props;
		const {title} = this.state;

		if (e.keyCode === keyEnter) {
			editTitle(title, getDataId(e), getElemPriority(e));
			filtered();

			this.setState({
				currentTitleEdit: null,
			});
		}
	};

	render() {
		const {id, text} = this.props;
		const {currentTitleEdit} = this.state;

		return (
			<div>
				{currentTitleEdit === id ? (
					<input
						className="task__edit--title"
						data-id={id}
						name="title"
						onChange={this.handleOnChangeTitle}
						onKeyDown={this.handleOnKeyDownTitle}
						onBlur={this.handleOnBlurTitle}
						// value={task[it].title}
						autoFocus
						type="text"
					/>
				) : (
					<h1
						className="task__title"
						data-id={id}
						onClick={this.handleOnClickTitle}
					>
						{text}
					</h1>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	editTitle,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Title);

Title.propTypes = {
	editTitle: PropTypes.func,
	filtered: PropTypes.func,
	getDataId: PropTypes.func,
	getElemPriority: PropTypes.func,
	id: PropTypes.number,
	text: PropTypes.string,
};
