import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../css/main.min.css';
import {deleteTask} from '../../actions/actions';

class DeletingTask extends PureComponent {

    handleOnClickDelete = (e) => {
        const {deleteTask, getDataId, getElemPriority, filtered} = this.props;

        deleteTask(true, getDataId(e), getElemPriority(e));
        filtered();
    };

    render() {
        const {id} = this.props;

        return (
            <div>
                <button className='task__delete-btn'
                        data-id={id}
                        onClick={this.handleOnClickDelete}>Delete</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletingTask);