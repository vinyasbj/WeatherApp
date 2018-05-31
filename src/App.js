import React from 'react';

import Titles from "./component/Titles";
import Form from "./component/Form";


const API_KEY = "a2fbdc33f4b42915adf6e30e2cf6f9ac";

class App extends React.Component {
getWeather = async(e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);
}
  render(){
    return(
      <div>
        <Titles/>
        <Form getWeather= {this.getWeather}/>
      </div>
    );
  }
}

export default App;
