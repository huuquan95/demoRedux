import { connect } from 'react-redux';
import { addNewTask, toggleAddTaskModal } from '../actions';
import AddComponent from '../components/AddComponent';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        },
        onToggleAddTaskModal: () => {
            dispatch(toggleAddTaskModal());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);