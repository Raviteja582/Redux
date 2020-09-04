import * as ActionType from './ActionType';
 

const intialState = {
    variable : 0
}

const store_0 = (state=intialState,action) => {
    switch(action.type){
        case ActionType.INCREMENT:
            return{
                ...state,
                variable : state.variable + action.payload
            }
        case ActionType.DECREMENT:
            return{
                ...state,
                variable: state.variable - action.payload
            }
        default: return state
    }
}

export default store_0;