import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import '../../css/main.min.css';
import {getTask} from "../../reducers";
import {filteredP1, filteredP2, filteredP3, filteredAll} from '../../actions/actions'

class TaskFilters extends PureComponent {

    handleOnClickAll = () => {
        const {filteredAll} = this.props;

        filteredAll(`All`)
    };

    handleOnClickP1 = () => {
        const {filteredP1} = this.props;
        const priority = `P1`;

        filteredP1(priority)
    };

    handleOnClickP2 = () => {
        const {filteredP2} = this.props;
        const priority = `P2`;

        filteredP2(priority)
    };

    handleOnClickP3 = () => {
        const {filteredP3} = this.props;
        const priority = `P3`;

        filteredP3(priority)
    };

    render() {
        return (
            <div className='task-filter'>
                <button className='task-filter__btn'
                        onClick={this.handleOnClickAll}>All</button>
                <button className='task-filter__btn'
                        onClick={this.handleOnClickP1}>P1</button>
                <button className='task-filter__btn'
                        onClick={this.handleOnClickP2}>P2</button>
                <button className='task-filter__btn'
                        onClick={this.handleOnClickP3}>P3</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    task: getTask(state)
});

const mapDispatchToProps = {
    filteredAll,
    filteredP1,
    filteredP2,
    filteredP3
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilters)