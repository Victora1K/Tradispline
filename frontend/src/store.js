import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { taskListReducers, taskDetailsReducers } from './reducers/taskReducers'
import { planReducer } from './reducers/planReducers'


const reducer = combineReducers({
    taskList: taskListReducers,
    taskDetails: taskDetailsReducers,
    plan: planReducer,
})

const planItemsFromStorage = localStorage.getItem('planItems') ?
        JSON.parse(localStorage.getItem('planItems')) : []

const initialState = {
    plan: {planItems: planItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store