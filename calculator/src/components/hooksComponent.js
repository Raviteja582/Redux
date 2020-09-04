import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/ActionCreators';

function Hooks() {
    //this function accepts a funtion as parameter called as selector function which gets state of the application same mapStateToProps.                   
    const x = useSelector(state => state.variable);

    //this funtion is used to refer the dispatch in the store.
    const dispatch = useDispatch()

    return(
        <div>
            <h3>Number - {x}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Hooks;