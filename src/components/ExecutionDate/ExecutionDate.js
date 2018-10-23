import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../css/main.min.css';
import {editExecutionDate} from '../../actions/actions';

class ExecutionDate extends PureComponent {
    state = {
        currentExecutionDateEdit: null,
        executionDate: ``
    };

    elemPriority = e => e.target.parentElement.parentElement.parentElement.parentElement.querySelector(`.task__priority`).textContent.toLowerCase();

    handleOnChangeExecutionDate = (e) => {
        const {value} = e.target;

        this.setState({
            executionDate: value
        })
    };

    handleOnClickExecutionDate = (e) => {
        const {getDataId} = this.props;

        this.setState({
            currentExecutionDateEdit: getDataId(e)
        })
    };

    handleOnBlurExecutionDate = (e) => {
        const {editExecutionDate, getDataId, filtered} = this.props;
        const {executionDate} = this.state;

        editExecutionDate(executionDate, getDataId(e), this.elemPriority(e));
        filtered();

        this.setState({
            currentExecutionDateEdit: null
        });
    };

    handleOnKeyDownExecutionDate = (e) => {
        const keyEnter = 13;
        const {editExecutionDate, getDataId, filtered} = this.props;
        const {executionDate} = this.state;

        if (e.keyCode === keyEnter) {
            editExecutionDate(executionDate, getDataId(e), this.elemPriority(e));
            filtered();

            this.setState({
                currentExecutionDateEdit: null
            })
        }
    };

    render() {
        const {currentExecutionDateEdit} = this.state;
        const {id, text} = this.props;

        return (
            <li className='execution__item'>
                {currentExecutionDateEdit === id ?
                    <input className='task__edit--date'
                           data-id={id}
                           name='executionDate'
                           onChange={this.handleOnChangeExecutionDate}
                           onKeyDown={this.handleOnKeyDownExecutionDate}
                           onBlur={this.handleOnBlurExecutionDate}
                           autoFocus
                           type="date"/> :
                    <span className='execution__date'
                          data-id={id}
                          onClick={this.handleOnClickExecutionDate}>Date: {text}</span>
                }
            </li>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    editExecutionDate
};

export default connect(mapStateToProps, mapDispatchToProps)(ExecutionDate);