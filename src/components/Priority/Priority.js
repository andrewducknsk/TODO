import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../css/main.min.css';
import {editPriority} from '../../actions/actions';

const EditPriority = (props) => {
    return (
        <select name="task-priority"
                data-id={props.data}
                onChange={props.onChange}
                onSelect={props.onSelected}
                onBlur={props.onBlur}
                autoFocus
                /*defaultValue=''*/>
            {/*<option value="" disabled></option>*/}
            <option value='P1'>P1</option>
            <option value='P2'>P2</option>
            <option value='P3'>P3</option>
        </select>);
};

class Priority extends PureComponent {
    state = {
        currentPriorityEdit: null,
        priority: ``
    };

    handleOnChangePriority = (e) => {
        const {value} = e.target;

        this.setState({
            priority: value
        })
    };

    handleOnClickPriority = (e) => {
        const {getDataId} = this.props;

        this.setState({
            currentPriorityEdit: getDataId(e),
        })
    };

    handleOnBlurPriority = (e) => {
        const {value} = e.target;
        const {editPriority, filtered} = this.props;
        const {currentPriorityEdit} = this.state;

        editPriority(value, currentPriorityEdit);
        filtered();

        this.setState({
            currentPriorityEdit: null,
            currentPriorityValue: ``
        })
    };

    render() {
        const {id, text} = this.props;
        const {currentPriorityEdit} = this.state;

        return (
            <div>
                {currentPriorityEdit === id ?
                    <EditPriority data={id}
                                  onChange={this.handleOnChangePriority}
                                  onBlur={this.handleOnBlurPriority}/> :
                    <p className={`task__priority task__priority--${text.toLowerCase()}`}
                       data-id={id}
                       onClick={this.handleOnClickPriority}>{text}</p>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    editPriority
};

export default connect(mapStateToProps, mapDispatchToProps)(Priority);