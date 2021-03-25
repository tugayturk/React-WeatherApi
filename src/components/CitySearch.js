import React, { Component } from "react";
import "./CitySearch.css"

export default class CitySearch extends Component {
  render() {
    return (
      <div>
        <form  onSubmit={this.props.getCities}>
          <input className="myInput" name="city" type="text" onChange={this.props.handlerChange} placeholder="Enter a City Name"></input>
        </form>
      </div>
    );
  }
}
