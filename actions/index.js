import {
    ADD_NEW_TASK,
    ADD_NEW_TASK1,
    TOGGLE_ONE_TASK,
    TOGGLE_ADD_TASK_MODAL
} from './actionTypes';
let newTaskId = 4;

// Action: 'add new task'
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    }
}

// Action: 'toggle 1 task to completed /  incompleted'
export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}

// Action: 'Click Add button to show AddModal'
export const toggleAddTaskModal = () => {
    return {
        type: TOGGLE_ADD_TASK_MODAL
    }
}