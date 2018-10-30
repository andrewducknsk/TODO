import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editDescription} from '../../actions/actions';

class Description extends PureComponent {
	state = {
		currentDescriptionEdit: null,
		description: ``,
	};

	handleOnChangeDescription = e => {
		const {value} = e.target;

		this.setState({
			description: value,
		});
	};

	handleOnClickDescription = e => {
		const {getDataId} = this.props;

		this.setState({
			currentDescriptionEdit: getDataId(e),
		});
	};

	handleOnBlurDescription = e => {
		const {editDescription, getDataId, filtered, getElemPriority} = this.props;
		const {description} = this.state;

		editDescription(description, getDataId(e), getElemPriority(e));
		filtered();

		this.setState({
			currentDescriptionEdit: null,
		});
	};

	handleOnKeyDownDescription = e => {
		const keyEnter = 13;
		const {editDescription, getDataId, filtered, getElemPriority} = this.props;
		const {description} = this.state;

		if (e.keyCode === keyEnter) {
			editDescription(description, getDataId(e), getElemPriority(e));
			filtered();

			this.setState({
				currentDescriptionEdit: null,
			});
		}
	};

	render() {
		const {id, text} = this.props;
		const {currentDescriptionEdit} = this.state;

		return (
			<div>
				{currentDescriptionEdit === id ? (
					<textarea
						className="task__edit--description"
						data-id={id}
						name="description"
						onChange={this.handleOnChangeDescription}
						onKeyDown={this.handleOnKeyDownDescription}
						onBlur={this.handleOnBlurDescription}
						// value={this.state.description}
						autoFocus
					/>
				) : (
					<p
						className="task__description"
						data-id={id}
						onClick={this.handleOnClickDescription}
					>
						{text}
					</p>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	editDescription,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Description);

Description.propTypes = {
	editDescription: PropTypes.func,
	filtered: PropTypes.func,
	getDataId: PropTypes.func,
	getElemPriority: PropTypes.func,
	id: PropTypes.number,
	text: PropTypes.string,
};
