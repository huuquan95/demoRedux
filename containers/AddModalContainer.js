import { connect } from 'react-redux';
import { addNewTask, toggleAddTaskModal } from '../actions';
import AddModal from '../components/AddModal';

const mapStateToProps = state => {
    return {
        isShowAddTaskModal: state.taskReducers.isShowAddTaskModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleAddTaskModal: () => {
            dispatch(toggleAddTaskModal());
        },
        onAddNewTask: (inputTaskName, inputTaskDescription) => {
            dispatch(addNewTask(inputTaskName, inputTaskDescription));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
