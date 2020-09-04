/*  axios is a standard way of calling an API end point from the redux 
    redux-thunk is a standard way of creating asynchoronous action creators, like fetchdata from source through API calls. 
*/

/* for this assingment we use jsonplaceholder website for endpoint. */


const redux=require('redux');
const reduxLogger = require('redux-logger');
const thunkmiddleware = require('redux-thunk').default
const axios = require('axios');

const createStore = redux.createStore
const applymiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchusersrequest = () => {
    return({
        type: FETCH_USERS_REQUEST
    })
}   

const fetchusersuccess = (users) => {
    return({
        type: FETCH_USERS_SUCCESS,
        payload: users
    })
}

const fetchusersfailure =(err) => {
    return({
        type: FETCH_USERS_FAILURE,
        payload: err
    })
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
                users: [],
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

/* An action creator which return a function is called a redux-thunk. A redux thunk fuction gets a dispath funtion as arguments. */

const fetchusers = () =>{
    return function(dispatch){
        dispatch(fetchusersrequest())
        axios.get('https://jsonplaceholder.typicode.com/user')
        .then(response => {
            //response.data is the array of users
            const users = response.data.map( user => user.id)
            dispatch(fetchusersuccess(users))
        })
        .catch( err => {
            //err.message is the error description
            dispatch(fetchusersfailure(err.message))
        })
    }
}


const store = createStore(reducer,applymiddleware(thunkmiddleware,logger));
store.dispatch(fetchusers())

/*  So the process goes like this:
        when an action dispatch to the store, before the action reaches the reducer, redux implements the middleware applied on it.
        Here comes the redux-thunk which was implemented. It calls the api endpoint and fetches the data as a asynchronos function and 
        deliver the data to the respection action creators and then to reducers.

        so here frst fetchusers -> dispatch(fetchusersrequest()) -> fetchusersrequest() -> reducer -> fetchusers -> axios() -> dispatch(fetchusersuccess(users)) -> fetchusersuccess -> reducer -> fetchusers -> ends
*/

