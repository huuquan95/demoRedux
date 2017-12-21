import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from '../actions/actionTypes.js'

const defaultTasks = [
    {
        taskId: 0,
        taskName: 'Get up',
        completed: false
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
        completed: false
    }
]

const taskReducers = (tasks = defaultTasks, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            // alert('ADD_NEW_TASK')
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]
        case TOGGLE_ONE_TASK:
            // alert('TOGGLE_ONE_TASK')
            return tasks.map(task =>
                (
                    (task.taskId === action.taskId)
                        ? { ...task, completed: !task.completed }
                        : task
                )
            )

        default:
            return tasks;
    }
}
export default taskReducers;