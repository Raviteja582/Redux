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

export const double = () =>{
    return{
        type: ActionType.DOUBLE,
        info: 'Double the state variable'
    }
}

export const half = () => {
    return{
        type: ActionType.HALF,
        info: 'Half the state Variable'
    }
}