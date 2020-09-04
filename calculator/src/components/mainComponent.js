import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/ActionCreators';
class Main extends Component{
    render(){
        return(
            <div>
                <h3>Number - {this.props.x}</h3>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        );
    }
}


/*  1. It is a funtion which is used to get the data(state) from redux store as state variable
    and return an object     
*/

const mapStateToProps = state => {
    return{
        x: state.linear.variable
    }
}

/*  2. It is a funtion which is used to get the redux dispath method as a parameter
    and returns object.
*/

const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}


/*  3. connect the above 2 methods to the store
    That means the state from redux in linked props to this component
    and the dispatch reducer is props to this component
*/
export default connect(mapStateToProps,mapDispatchToProps)(Main);