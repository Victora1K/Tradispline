import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { taskListReducers, taskDetailsReducers } from './reducers/taskReducers'
import { planReducer } from './reducers/planReducers'
import { userLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateProfileReducers} from './reducers/userReducers'

const reducer = combineReducers({
    taskList: taskListReducers,
    taskDetails: taskDetailsReducers,
    plan: planReducer,
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdateProfile: userUpdateProfileReducers,
})

const planItemsFromStorage = localStorage.getItem('planItems') ?
    JSON.parse(localStorage.getItem('planItems')) : []

//get user Info from storage, null if not available
const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    plan: { planItems: planItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store