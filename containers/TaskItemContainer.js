import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTask: (taskId) => {
            dispatch(toggleTask(taskId));
        }
    };
}

const TaskItemContainer = connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);
export default TaskItemContainer;