import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      actions: [],
      projects: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:9090/actions')
      .then(res => {
        this.setState({ actions: res.data })
      })
      .catch (error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='App'>

      </div>
    )
  }
}

export default App;