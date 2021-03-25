import React, { Component } from "react";
import City from "./components/City";
import CitySearch from "./components/CitySearch";
import "./App.css";


export default class App extends Component {
  state = {
    city: "",
    cityDegree:"",
    main:"",
    description:"",
    icon:""
  };
 
  
  handlerChange=(e)=>{
    this.setState({
      city:e.target.value
    })
  }
  calculateCelcius(temp){
    let celcius=Math.floor(temp-273.15)
    return celcius;
  }
   getCities= async (e)=>{
    e.preventDefault()
    const city=e.target.elements.city.value;
    const API_KEY="790f7987f52ce26f99e0503c0720c7bf"
    const apicall= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const response = await apicall.json()

    this.setState({
      cityDegree:this.calculateCelcius(response.main.temp),
      city:`${response.name}`,
      main:response.weather[0].main,
      description: response.weather[0].description,
      icon:response.weather[0].icon
    })
    
    console.log(response)
    console.log(city)
  }
  

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Weather-Api</h1>
        <CitySearch getCities={this.getCities} handlerChange={this.handlerChange}   />
        <City cityDegree={this.state.cityDegree} getCities={this.getCities} city={this.state.city} main={this.state.main} description={this.state.description} icon={this.state.icon}  />
        
      </div>
    );
  }
}
