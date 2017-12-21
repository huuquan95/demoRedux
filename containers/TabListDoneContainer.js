import { connect } from 'react-redux';
import TabListDoneComponent from '../components/TabListDoneComponent';

const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
}

const TabListDoneContainer = connect(mapStateToProps)(TabListDoneComponent);
export default TabListDoneContainer;