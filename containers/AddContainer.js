import { connect } from 'react-redux';
import { toggleAddTaskModal } from '../actions';
import AddComponent from '../components/AddComponent';
import React from 'react';

const mapStateToProps = (state, props) => {
    return {
        drawerNavigation: props.drawerNavigation
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