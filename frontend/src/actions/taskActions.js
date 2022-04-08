import axios from 'axios'
import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAILURE,

    TASK_DETAILS_REQUEST,
    TASK_DETAILS_SUCCESS,
    TASK_DETAILS_FAILURE,
} from '../constants/taskConstants'



export const listTasks = () => async (dispatch) => {
    try {



        dispatch({ type: TASK_LIST_REQUEST })

        const { data } = await axios.get('/tasks/')

        setTimeout(() => {

            dispatch({
                type: TASK_LIST_SUCCESS,
                payload: data

            })
        }, 250);



    } catch (error) {
        dispatch({
            type: TASK_LIST_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }
}

export const listTaskDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: TASK_DETAILS_REQUEST })

        const { data } = await axios.get(`/tasks/${id}`)

        dispatch({
            type: TASK_DETAILS_SUCCESS,
            payload: data

        })

    } catch (error) {
        dispatch({
            type: TASK_DETAILS_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }
}