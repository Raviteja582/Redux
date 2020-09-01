/* The flow of the REDUX is as following 
Send the state to the application          Emits an action to perform
         -------------------> JS APPLICATION ----------------
        |                                                   |
        |                                                   |
        |                                                   |
        |                                                   |
        |                                                   |    Decide which action to perform
        |                                                   |
        |                                                  \/                 
      Store                                              Actions                               
        ^                                                   |    
        |                                                   |
        |                                                   |
        |                                                   |
        |                                                   |
        |                                                   |
         ------------------> Reducers<-----------------------   
                                                take the previous state and action and modify the state
        Return previous state to reducer
        and take the modify state from the
        reducer.

*/

/* First Step is to Create the type of Action we want to do:
    Let say we have a variable and we want to update its value using redux.
*/

/* In order to update the vairable value we either Decrease it or increase or reset to default.
    - INCREMENT
    - DECREMENT
    - RESET
*/

const prompt = require('prompt-sync')();

const redux = require('redux');
const createStore = redux.createStore

const INCREMENT = 'INCREMENT'                   //ACTIONTYPE
const DECREMENT = 'DECREMENT'                   //ACTIONTYPE
const MULTIPLE = 'MULTIPLE'                     //ACTIONTYPE
const DIVIDE = 'DIVIDE'                         //ACTIONTYPE
const RESET = 'RESET'                           //ACTIONTYPE


/* So After deciding the actions types which are to be performed, then we create  "actions" */

/* Action are the javascript functions which returns the type of action to be performed on the store and other 
            data varaibles need to update the store.
*/

// For INCREMENT we create ACTION as 

function increment(){
    return({
        type: INCREMENT,
        info: "INCREMENT THE STATE VARIABLE",
    })
}

function decrement(){
    return({
        type: DECREMENT,
        info: "DECREMENT THE STATE VARIABLE",
    })
}

function multiple(num){
    return({
        type: 'MULTIPLE',
        number: num
    })
}

function divide(num){
    return({
        type: 'DIVIDE',
        number: num != 0 ? num : 1
    })
}

function reset(){
    return({
        type: RESET,
        info: "RESET THE STATE VARIABLE",
    })
}

/* So that we have action types and actions to be performed on the store. Then we have to declare the state of the application
    That is a simple variable which holds the value after performing each operations
*/

const state_variable ={
    x:0
}

/*  Then we have a state of the application and actions on the state to perform 
    So the actions are not directly show impact on the state variable.
    We have to Create a store which stores the state of the application and the only way the state is modified is
    by dispatching the action to the store.

    So dispatching the action and modifying the store is done by the reducer function which takes two parameters
        1. Current State of the store 
        2. Action to be performed on the store.
*/

/* So we create a reducer for the store like */

const reducer = (state=state_variable,action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                x : state.x + 1
            };
        case DECREMENT:
            return {
                ...state,
                x : state.x - 1
            };
        case MULTIPLE:
            return {
                ...state,
                x : state.x * action.number
            };
        case DIVIDE:
            return {
                ...state,
                x : state.x / action.number
            };
        case RESET:
            return {
                ...state,
                x : 0
            };
        default:
            return state
    }
}


/*  So we have:
        - We have application consists of state 
        - We have declared actions to be performed on the state
        - We created action to be performed.
        - We created reducers to take current state and action and modify the state.

    So our next task is to create a store to hold the state of the application and
    dispath the actions to the reducers to modify the state in the store.

*/

/* To create a store we use redux module which is defined */

const store = createStore(reducer) // it will take the reducer which can modify the store.
console.log('Intial state',store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState())); //Listener to the store and call whenever a modify the state.
store.dispatch(increment())
store.dispatch(multiple(5))
store.dispatch(decrement())
store.dispatch(divide(2))
store.dispatch(reset())
unsubscribe()  //Remove the dispatch methods on the stores.