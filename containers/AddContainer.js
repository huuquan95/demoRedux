import { connect } from 'react-redux';
import { addNewTask, showAddTaskModal } from '../actions';
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
        onClickShowTaskModal: () => {
            alert("onClickShowTaskModal")
            dispatch(showAddTaskModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);