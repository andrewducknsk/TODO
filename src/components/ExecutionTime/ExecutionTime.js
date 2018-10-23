import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../css/main.min.css';
import {editExecutionTime} from '../../actions/actions';

class ExecutionTime extends PureComponent {
    state = {
        currentExecutionTimeEdit: null,
        executionTime: ``
    };

    elemPriority = e => e.target.parentElement.parentElement.parentElement.parentElement.querySelector(`.task__priority`).textContent.toLowerCase();

    handleOnChangeExecutionTime = (e) => {
        const {value} = e.target;

        this.setState({
            executionTime: value
        })
    };

    handleOnClickExecutionTime = (e) => {
        const {getDataId} = this.props;

        this.setState({
            currentExecutionTimeEdit: getDataId(e)
        })
    };

    handleOnBlurExecutionTime = (e) => {
        const {editExecutionTime, getDataId, filtered} = this.props;
        const {executionTime} = this.state;

        editExecutionTime(executionTime, getDataId(e), this.elemPriority);
        filtered();

        this.setState({
            currentExecutionTimeEdit: null
        })

    };

    handleOnKeyDownExecutionTime = (e) => {
        const keyEnter = 13;
        const {editExecutionTime, getDataId, filtered} = this.props;
        const {executionTime} = this.state;

        if (e.keyCode === keyEnter) {
            editExecutionTime(executionTime, getDataId(e), this.elemPriority);
            filtered();

            this.setState({
                currentExecutionTimeEdit: null
            })
        }
    };

    render() {
        const {currentExecutionTimeEdit} = this.state;
        const {id, text} = this.props;

        return (
            <li className='execution__item'>
                {currentExecutionTimeEdit === id ?
                    <input className='task__edit--time'
                           data-id={id}
                           name='executionTime'
                           onChange={this.handleOnChangeExecutionTime}
                           onKeyDown={this.handleOnKeyDownExecutionTime}
                           onBlur={this.handleOnBlurExecutionTime}
                           autoFocus
                           type="time"/> :
                    <span className='execution__date'
                          data-id={id}
                          onClick={this.handleOnClickExecutionTime}>Time: {text}</span>
                }
            </li>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    editExecutionTime
};

export default connect(mapStateToProps, mapDispatchToProps)(ExecutionTime);