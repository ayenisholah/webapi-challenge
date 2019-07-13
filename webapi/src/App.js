import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

import Home from './components/Home'

class App extends Component {
  constructor(props) {
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
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='App'>
        <Link to='/actions'>Actions</Link>

        <Route
          exact
          path='/'
          component={Home}
        />

      </div>
    )
  }
}

export default App;