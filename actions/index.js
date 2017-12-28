import {
    ADD_NEW_TASK,
    TOGGLE_ONE_TASK,
    TOGGLE_ADD_TASK_MODAL,
    FETCH_DATA_FIRST_TIME,
    REFRESH_STATE
} from './actionTypes';

// Action: 'add new task, including taskName and taskDescription'
export const addNewTask = (inputTaskName, inputTaskDescription) => {
    return {
        type: ADD_NEW_TASK,
        taskName: inputTaskName,
        taskDescription: inputTaskDescription
    }
}

// Action: 'toggle a task to completed/incompleted'
export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}

// Action: 'Click Add button to show Drawer'
export const toggleAddTaskModal = () => {
    return {
        type: TOGGLE_ADD_TASK_MODAL
    }
}

// get data (To Do task list) when the application run
export const fetchDataFistTime = () => {
    return {
        type: FETCH_DATA_FIRST_TIME
    }
}

export const refreshState = () => {
    return {
        type: REFRESH_STATE
    }
}