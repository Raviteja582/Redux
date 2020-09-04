import React, { Component } from 'react';
class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>Number in the intial state</h3>
                <button>Increment</button>
            </div>
        );
    }
}

export default Main;