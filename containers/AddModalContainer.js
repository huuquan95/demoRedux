import { connect } from 'react-redux';
import { addNewTask1 } from '../actions';
import AddModal from '../components/AddModal';

const mapStateToProps = state => {
    return {
        isShowAddTaskModal: state.taskReducers.isShowAddTaskModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName, inputTaskDescription) => {
            dispatch(addNewTask1(inputTaskName, inputTaskDescription));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
