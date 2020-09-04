import * as ActionType from '../redux/ActionType';
export const increment = () =>{
    return{
        type: ActionType.INCREMENT,
        info: 'Increment the variable'
    }
}

export const decrement = () =>{
    return{
        type: ActionType.DECREMENT,
        info: 'Decrement the variable'        
    }
}

