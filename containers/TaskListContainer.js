import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';
import { fetchDataFistTime, refreshState } from '../actions';
import Api from '../api/Api';

const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers.tasks ? [] : state.taskReducers.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchDataFistTime: () => {
            Api.getTasks()
                .then((res) => res.json())
                .then((tasks) =>
                    dispatch(fetchDataFistTime(tasks))
                )
                .catch((err) => {
                    console.error(err);
                    return dispatch(fetchDataFistTime([]))
                });
        },
        onRefreshState: () => {
            dispatch(refreshState());
        },
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
export default TaskListContainer;