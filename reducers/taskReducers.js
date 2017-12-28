import {
    ADD_NEW_TASK,
    TOGGLE_ONE_TASK,
    TOGGLE_ADD_TASK_MODAL,
    FETCH_DATA_FIRST_TIME,
    REFRESH_STATE
} from '../actions/actionTypes.js';

const defaultState = {
    tasks: [
        // {
        //     taskId: 0,
        //     taskName: 'Get up',
        //     taskDescription: '10:00 AM',
        //     completed: true
        // },
        // {
        //     taskId: 1,
        //     taskName: 'Wake',
        //     taskDescription: '9:00 AM',
        //     completed: false
        // },
        // {
        //     taskId: 2,
        //     taskName: 'Wash a face',
        //     taskDescription: '8:00 AM',
        //     completed: false
        // },
        // {
        //     taskId: 3,
        //     taskName: 'brush teeth',
        //     taskDescription: '7:00 AM',
        //     completed: true
        // }
    ],
    isShowAddTaskModal: false,
}
async function getMoviesFromApi() {
    try {
        let response = await fetch(
            'https://facebook.github.io/react-native/movies.json'
        );
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}
const taskReducers = (state = defaultState, action) => {

    switch (action.type) {

        case FETCH_DATA_FIRST_TIME:
            fetch('http://192.168.64.2/index.php')
                .then((response) => response.json())
                .then((responseJson) => {
                    state.tasks = responseJson;
                    // return state;
                })
                .catch((error) => {
                    console.error(error);
                });

            // this state is empty cuz it saparate fetch data in new 
            return state;

        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [{
                    taskId: state.tasks.length,
                    taskName: action.taskName,
                    taskDescription: action.taskDescription,
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

        case TOGGLE_ADD_TASK_MODAL:
            return {
                ...state,
                isShowAddTaskModal: !state.isShowAddTaskModal
            }

        case REFRESH_STATE:
            return state;

        default:
            return state;
    }
}

export default taskReducers;
//alert(` =${JSON.stringify(state)} `);