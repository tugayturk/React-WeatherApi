import React, { Component } from 'react'
import "./City.css";


export default class City extends Component {
    render() {
        return (
            <div className="city">
                <h1 >{this.props.city}</h1>
                <h1> {this.props.cityDegree+"°"} </h1>
                <h1>{this.props.main}</h1>
                <h1>Description:{this.props.description}</h1>
               
            </div>
        )
    }
}
