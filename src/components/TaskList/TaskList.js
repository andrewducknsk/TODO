import React, {PureComponent} from 'react';
import '../../css/main.min.css';
import TaskFilters from "../TaskFilters/TaskFilters";
import Title from "../Title/Title";
import Description from "../Description/Description";
import Priority from "../Priority/Priority";
import ExecutionDate from "../ExecutionDate/ExecutionDate";
import ExecutionTime from "../ExecutionTime/ExecutionTime";
import CompletingTask from "../CompletingTask/CompletingTask";
import {connect} from 'react-redux';
import {getFilter, getFilteredTask, getTask} from "../../reducers";
import {overdueTask, filteredP2, filteredP1, filteredP3} from "../../actions/actions";
import {store} from "../../index";
import DeletingTask from "../DeletingTask/DeletingTask";

class TaskList extends PureComponent {
    componentDidMount() {
        window.addEventListener('unload', () => {
            localStorage.setItem(`state`, JSON.stringify(store.getState()));
        });

        this.getProps = setTimeout(() => {
            this.chekOverdueTask = setInterval(this.checkOverdueTask(), 60000); // 1min
        }, 1000); // 1s
    };

    componentWillUnmount() {
        clearInterval(this.chekOverdueTask);
        clearTimeout(this.getProps);
    }

    checkOverdueTask = () => {
        const {task} = this.props;

        const {overdueTask} = this.props;

        const {year, month, date, hours, minutes} = this.getDate();

        const dateNow = +`${year}${month}${date}`;
        const timeNow = +`${hours}${minutes}`;

        const overdueTaskDate = task
            .filter(task => task.isCompleted === false)
            .map(task => ({
                date: parseInt(task.executionDate.replace(/[^\d+]/g, ``), 10),
                time: task.executionTime !== `` ?
                    parseInt(task.executionTime.replace(/[^\d+]/g, ``), 10) :
                    ``,
                id: task.id
            }))
            .forEach(el => {
                if ((el.date <= dateNow && !el.time !== `` && el.time < timeNow)) {
                    overdueTask(true, el.id)
                } else {
                    overdueTask(false, el.id)
                }
            });
    };

    getDate = () => {
        const year = new Date().getFullYear();

        let date = new Date().getDate();
        if (date < 10) {
            date = `0${date}`
        }

        let month = new Date().getMonth() + 1;
        if (month < 10) {
            month = `${month}`
        }

        let hours = new Date().getHours();
        if (hours < 10) {
            hours = `0${hours}`
        }
        let minutes = new Date().getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`
        }

        return {
            year,
            date,
            month,
            hours,
            minutes
        }
    };

    getDataId = (e) => +e.target.getAttribute(`data-id`);

    getElemPriority = e => e.target.parentElement.parentElement.querySelector(`.task__priority`).textContent.toLowerCase();

    filteredOnChangeTask = () => {
        const {filter, filteredP1, filteredP2, filteredP3 } = this.props;
        const filterFlag = {
          p1: `P1`,
          p2: `P2`,
          p3: `P3`
        };

        switch (filter) {
            case filterFlag.p1:
                filteredP1(filterFlag.p1);
                break;
            case filterFlag.p2:
                filteredP2(filterFlag.p2);
                break;
            case filterFlag.p3:
                filteredP3(filterFlag.p3);
                break;
            default:
                return null;
        }
    };

    render() {
        const {filter, task, filteredTask} = this.props;
        let viewTask = [];

        if (filter !== `All`) {
            viewTask = filteredTask;
        } else {
            viewTask = task;
        }

        return (
            <section className='task-list'>
                <TaskFilters />
                {viewTask.map(el => (
                    <div className={`task ${el.isCompleted ? `task--completed`: ``} ${el.isOverdue ? `task--overdue` : ``}`} key={el.id} data-id={el.id}>
                        <Priority id={el.id}
                                  text={el.priority}
                                  getDataId={this.getDataId}
                                  filtered={this.filteredOnChangeTask}/>
                        <DeletingTask id={el.id}
                                      getDataId={this.getDataId}
                                      filtered={this.filteredOnChangeTask}
                                      getElemPriority={this.getElemPriority}/>
                        <Title id={el.id}
                               text={el.title}
                               getDataId={this.getDataId}
                               filtered={this.filteredOnChangeTask}
                               getElemPriority={this.getElemPriority}/>
                        <Description id={el.id}
                                     text={el.description}
                                     getDataId={this.getDataId}
                                     filtered={this.filteredOnChangeTask}
                                     getElemPriority={this.getElemPriority}/>
                        <div className='execution'>
                            <p className='execution__title'>Execution:</p>
                            <ul className='execution__list'>
                                <ExecutionDate id={el.id}
                                               text={el.executionDate}
                                               getDataId={this.getDataId}
                                               filtered={this.filteredOnChangeTask}/>
                                <ExecutionTime id={el.id}
                                               text={el.executionTime}
                                               getDataId={this.getDataId}
                                               filtered={this.filteredOnChangeTask}/>
                            </ul>
                        </div>
                        <CompletingTask id={el.id}
                                        date={el.completedDate}
                                        time={el.completedTime}
                                        getDataId={this.getDataId}
                                        getDate={this.getDate}
                                        filtered={this.filteredOnChangeTask}/>
                    </div>
                ))}
            </section>
        );
    }
}
const mapStateToProps = state => ({
    task: getTask(state),
    filter: getFilter(state),
    filteredTask: getFilteredTask(state)
});

const mapDispatchToProps = {
    overdueTask,
    filteredP2,
    filteredP1,
    filteredP3
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);