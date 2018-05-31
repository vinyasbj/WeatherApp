import React from 'react';

import Titles from "./component/Titles";
import Form from "./component/Form";


const API_KEY = "a2fbdc33f4b42915adf6e30e2cf6f9ac";

class App extends React.Component {
  render(){
    return(
      <div>
        <Titles/>
        <Form/>
      </div>
    );
  }
}

export default App;
