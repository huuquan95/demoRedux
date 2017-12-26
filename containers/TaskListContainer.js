import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent';


const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers.tasks ? [] : state.taskReducers.tasks
    }
}
const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;