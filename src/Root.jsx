import React, {Component} from 'react';
import Car from './Compoentns/Car'
import {data} from "./Mock/data";

class Root extends Component {
    render(){
        return(
            <div>
                {data.map((value)=> <Car name={value.name} desc={value.desc}>
                    <h1 style={{color: 'red'}}>{value.id}</h1>
                </Car>)}
            </div>
        )
    }
}


export default Root;