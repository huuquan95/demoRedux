import { ADD_NEW_TASK, TOGGLE_ONE_TASK, SHOW_ADD_TASK_MODAL } from '../actions/actionTypes.js'

const defaultState = {
    tasks: [
        {
            taskId: 0,
            taskName: 'Get up',
            completed: true
        },
        {
            taskId: 1,
            taskName: 'Wake',
            completed: false
        },
        {
            taskId: 2,
            taskName: 'Wash a face',
            completed: false
        },
        {
            taskId: 3,
            taskName: 'brush teeth',
            completed: true
        }
    ],
    isShowAddTaskModal: false,
}

const taskReducers = (state = defaultState, action) => {

    switch (action.type) {

        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [{
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }].concat(state.tasks),
            }

        case TOGGLE_ONE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    (
                        (task.taskId === action.taskId)
                            ? { ...task, completed: !task.completed }
                            : task
                    )
                )
            }

        case SHOW_ADD_TASK_MODAL:
            return {
                ...state,
                isShowAddTaskModal: true
            }

        default:
            return state;
    }
}

export default taskReducers;
//alert(`state send to task list =${JSON.stringify(state)} `);