import { PLAN_ADD_ITEM, PLAN_REMOVE_ITEM } from '../constants/planConstants'




export const planReducer = (state={planItems:[]}, action) => {
    switch(action.type){
        case PLAN_ADD_ITEM:
            const item = action.payload
            const existItem = state.planItems.find(x => x.task === item.task)

            if(existItem){
                return{
                    ...state,
                    planItems: state.planItems.map(x => 
                        x.task === existItem.task ? item : x)
                        
                        
                }

            }else{
                return{
                    ...state,
                    planItems:[...state.planItems, item]
                }
            }

        case PLAN_REMOVE_ITEM:
            return{
                ...state, 
                planItems: state.planItems.filter(x => 
                    x.task !== action.payload)
            }


        default:
            return state
    }
}