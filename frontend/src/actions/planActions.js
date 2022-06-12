import  axios  from 'axios'
import { PLAN_ADD_ITEM, PLAN_REMOVE_ITEM } from '../constants/planConstants'



export const addToPlan = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`/tasks/${id}`)

    dispatch({
        type:PLAN_ADD_ITEM, 
        payload:{
            task: data._id,
            name: data.name,
            image: data.image,
            category: data.category,
            description: data.description


        }
    })
    localStorage.setItem('planItems', JSON.stringify(getState().plan.planItems))
}

export const removeFromPlan = (id)=> (dispatch, getState) => {
    dispatch({
        type: PLAN_REMOVE_ITEM, 
        payload: id,
    })
    localStorage.setItem('planItems', JSON.stringify(getState().plan.planItems))
}