import { connect } from 'react-redux';
import { toggleAddTaskModal } from '../actions';
import AddComponent from '../components/AddComponent';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleAddTaskModal: () => {
            dispatch(toggleAddTaskModal());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);