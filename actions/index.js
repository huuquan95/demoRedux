import {
    ADD_NEW_TASK,
    TOGGLE_ONE_TASK,
    TOGGLE_ADD_TASK_MODAL
} from './actionTypes';
let newTaskId = 4;

// Action: 'add new task, including taskName and taskDescription'
export const addNewTask = (inputTaskName, inputTaskDescription) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
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