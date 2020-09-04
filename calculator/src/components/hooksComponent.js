import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/ActionCreators';

function Hooks() {
    //this function accepts a funtion as parameter called as selector function which gets state of the application same mapStateToProps.                   
    const x = useSelector(state => state.linear.variable);

    //this funtion is used to refer the dispatch in the store.
    const dispatch = useDispatch()
    const [number,setNumber] = useState(1)
    return(
        <div>
            <h3>Number - {x}</h3>
            <input type='text' value={number} onChange={ e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(increment(number))}>Increment</button>
            <button onClick={() => dispatch(decrement(number))}>Decrement</button>
        </div>
    )
}

export default Hooks;