import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editTitle} from '../../actions/actions';

class Title extends PureComponent {
	state = {
		currentTitleEdit: null,
		title: ``,
		currentTitle: this.props.text,
	};

	handleOnChangeTitle = e => {
		const {value} = e.target;

		this.setState({
			title: value,
			currentTitle: value,
		});
	};

	handleOnClickTitle = e => {
		const {id} = this.props;

		this.setState({
			currentTitleEdit: id,
		});
	};

	handleOnBlurTitle = e => {
		const {editTitle, id, filtered, priority} = this.props;
		const {title} = this.state;

		editTitle(title, id, priority);
		filtered();

		this.setState({
			currentTitleEdit: null,
		});
	};

	handleOnKeyDownTitle = e => {
		const keyEnter = 13;
		const {editTitle, id, filtered, priority} = this.props;
		const {title} = this.state;

		if (e.keyCode === keyEnter) {
			editTitle(title, id, priority);
			filtered();

			this.setState({
				currentTitleEdit: null,
			});
		}
	};

	render() {
		const {id, text} = this.props;
		const {currentTitleEdit, currentTitle} = this.state;

		return (
			<React.Fragment>
				{currentTitleEdit === id ? (
					<input
						className="task__edit--title"
						name="title"
						value={currentTitle}
						onChange={this.handleOnChangeTitle}
						onKeyDown={this.handleOnKeyDownTitle}
						onBlur={this.handleOnBlurTitle}
						autoFocus
						type="text"
					/>
				) : (
					<h1 className="task__title" onClick={this.handleOnClickTitle}>
						{text}
					</h1>
				)}
			</React.Fragment>
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
	priority: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	text: PropTypes.string,
};
