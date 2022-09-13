import React, {Component} from 'react';
import './style.css';

class Car extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div className='mainBlock'>
                <h1>{this.props.name}</h1>
                <h3>{this.props.desc}</h3>
                {this.props.children}
            </div>
        )
    }
}
export default Car;