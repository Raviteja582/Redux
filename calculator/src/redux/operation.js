import * as ActionType from './ActionType';
 

const intialState = {
    variable : 0
}

const reducer = (state=intialState,action) => {
    switch(action.type){
        case ActionType.INCREMENT:
            return{
                ...state,
                variable : state.variable+1
            }
        case ActionType.DECREMENT:
            return{
                ...state,
                variable: state.variable-1
            }
        default: return state
    }
}

export default reducer;