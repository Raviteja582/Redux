import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { double, half} from '../redux/ActionCreators';
class Linear extends Component{
    render(){
        return(
            <div>
                <h3>Number of Non-Linear - {this.props.x}</h3>
                <button onClick={this.props.double}>Double</button>
                <button onClick={this.props.half}>Half</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        x : state.expo.variable
    }
}

const mapDispatchToProps = dispatch => {
    return{
        double: () => dispatch(double()),
        half: () => dispatch(half())
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Linear);