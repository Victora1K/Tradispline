import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { taskListReducers, taskDetailsReducers } from './reducers/taskReducers'


const reducer = combineReducers({
    taskList: taskListReducers,
    taskDetails: taskDetailsReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store