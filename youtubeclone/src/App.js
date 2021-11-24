import React, { Component } from 'react';
import './App.css';
import axios from axios

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  componentDidMount(){
    this.getVideo();
  }

  async getVideo(){
    let response = await axios.get("http://127.0.0.1:8000/comment/")
    console.log(response);
    this.setState({
      music: response.data
    })
  }
  
  render() { 
    return ( 
      <div >

      </div>
     );
  }
}
 
export default App;