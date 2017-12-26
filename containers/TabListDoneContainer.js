import { connect } from 'react-redux';
import TabListDoneComponent from '../components/TabListDoneComponent';

const mapStateToProps = (state) => {
    return {
        tasks: !state.taskReducers.tasks
            ? []
            : state.taskReducers.tasks.filter(task => task.completed == true)
    }
}

const TabListDoneContainer = connect(mapStateToProps)(TabListDoneComponent);
export default TabListDoneContainer;