import * as ActionType from '../redux/ActionType';
export const increment = (number) =>{
    return{
        type: ActionType.INCREMENT,
        payload: isNaN(number) ? number : parseInt(number),
        info: 'Increment the variable',   
    }
}

export const decrement = (number) =>{
    return{
        type: ActionType.DECREMENT,
        payload: isNaN(number) ? number : parseInt(number),
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