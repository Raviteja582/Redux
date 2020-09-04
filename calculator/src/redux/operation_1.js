import * as ActionType from './ActionType';

const initialState = {
    variable : 1
}

const store_1 = (state=initialState,action) => {
    switch(action.type){
        case ActionType.DOUBLE:
            return{
                ...state,
                variable: state.variable*2
            }
        case ActionType.HALF:
            return{
                ...state,
                variable: state.variable/2 === 0 ? 1 : state.variable/2
            }
        default: return state
    }
}

export default store_1;