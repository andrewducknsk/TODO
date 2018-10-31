import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/main.min.css';
import {editDescription} from '../../actions/actions';

class Description extends PureComponent {
	state = {
		currentDescriptionEdit: null,
		description: this.props.text,
	};

	handleOnChangeDescription = e => {
		const {value} = e.target;

		this.setState({
			description: value,
		});
	};

	handleOnClickDescription = e => {
		const {id} = this.props;

		this.setState({
			currentDescriptionEdit: id,
		});
	};

	handleOnBlurDescription = e => {
		const {editDescription, id, filtered, priority} = this.props;
		const {description} = this.state;

		editDescription(description, id, priority);
		filtered();

		this.setState({
			currentDescriptionEdit: null,
		});
	};

	handleOnKeyDownDescription = e => {
		const keyEnter = 13;
		const {editDescription, id, filtered, priority} = this.props;
		const {description} = this.state;

		if (e.keyCode === keyEnter) {
			editDescription(description, id, priority);
			filtered();

			this.setState({
				currentDescriptionEdit: null,
			});
		}
	};

	render() {
		const {id, text} = this.props;
		const {currentDescriptionEdit, description} = this.state;

		return (
			<React.Fragment>
				{currentDescriptionEdit === id ? (
					<textarea
						className="task__edit--description"
						name="description"
						value={description}
						onChange={this.handleOnChangeDescription}
						onKeyDown={this.handleOnKeyDownDescription}
						onBlur={this.handleOnBlurDescription}
						autoFocus
					/>
				) : (
					<p
						className="task__description"
						onClick={this.handleOnClickDescription}
					>
						{text}
					</p>
				)}
			</React.Fragment>
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
	priority: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	text: PropTypes.string,
};
