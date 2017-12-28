import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';
import { fetchDataFistTime, refreshState } from '../actions';


const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers.tasks ? [] : state.taskReducers.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchDataFistTime: () => {
            dispatch(fetchDataFistTime());
        },
        onRefreshState: () => {
            dispatch(refreshState());
        },
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
export default TaskListContainer;