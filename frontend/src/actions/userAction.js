import axios from 'axios'
import axiois from 'axios'
import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,


    USER_LOGOUT,


    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,


    USER_DETAILS_REQUEST, 
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,


    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from '../constants/userConstants'


//A function within a function
export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        //Use axios to make a request to the backend.
        const {data} = await axios.post(
            '/users/login/',
            { 'username':email, 'password': password },
            config
             //sending the email & password as well for auth

            )
            //If successful, load the success action & users page
            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
            })
            //console.log('success' + data)
            //take all user data and save to local storage
            localStorage.setItem('userInfo', JSON.stringify(data))
            
            //console.log('success')
            window.location='/'

    }catch (error) {
        //console.log('failed')
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo', 'planItems')
    dispatch({type:USER_LOGOUT})
    dispatch({type:USER_DETAILS_RESET})
}

export const register = (name, email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        //Use axios to make a request to the backend.
        const {data} = await axios.post(
            '/users/register/',
            { 'name': name, 'email':email, 'password': password },
            config
             //sending the email & password as well for auth

            )
            //If successful, load the success action & users page
            dispatch({
                type:USER_REGISTER_SUCCESS,
                payload:data
            })

            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
            })
            //console.log('success' + data)
            //take all user data and save to local storage
            localStorage.setItem('userInfo', JSON.stringify(data))
            
            //console.log('success')
            window.location='/'

    }catch (error) {
        //console.log('failed')
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}



export const getUserDetails = (id) => async (dispatch, getState) => {
    //dispatch to fire off actions, getState helps you get current user
    // and make an api call to get data based on user id
    //value of id here right now will just say profile
    try{
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            //state gets filled with whats in local storage
            userLogin: {userInfo}, 
        } = getState()

        const config = {
            //headers can be tested on postman to see whats required
            //for this protected page, we need the users token to get access
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        //Use axios to make a request to the backend.
        const {data} = await axios.get(
            `/users/${id}/`,
            
            config
             //pass the config above with token and necessary credentials with the get request

            )
            //If successful, load the success action & users page
            dispatch({
                type:USER_DETAILS_SUCCESS,
                payload:data
                //once dispatched we'll send response data as a payload
            })

           
            //console.log('success' + data)
            //take all user data and save to local storage
            //localStorage.setItem('userInfo', JSON.stringify(data))
            
            //console.log('success')
            //window.location='/'

    }catch (error) {
        //console.log('failed')
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    //dispatch to fire off actions, getState helps you get current user
    // and make an api call to get data based on user id
    //value of id here right now will just say profile
    try{
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {
            //state gets filled with whats in local storage
            userLogin: {userInfo}, 
        } = getState()

        const config = {
            //headers can be tested on postman to see whats required
            //for this protected page, we need the users token to get access
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        //Use axios to make a request to the backend.
        const {data} = await axios.put(
            `/users/profile/update/`,
            user,
            config
             //pass the config above with token and necessary credentials with the get request

            )
            //If successful, load the success action & users page
            dispatch({
                type:USER_UPDATE_PROFILE_SUCCESS,
                payload:data
                //once dispatched we'll send response data as a payload
            })


            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
                //once dispatched we'll send response data as a payload
            })
           
            //console.log('success' + data)
            //take all user data and save to local storage
            localStorage.setItem('userInfo', JSON.stringify(data))
            
            //console.log('success')
            //window.location='/'

    }catch (error) {
        //console.log('failed')
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}