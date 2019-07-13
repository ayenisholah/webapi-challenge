import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';

import Home from './components/Home'
import Actions from './components/Actions';
import Action from './components/Action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:9090/actions')
      .then(response => {
        this.setState({ actions: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/actions'>Actions</Link>

        <Route
          exact
          path='/'
          component={Home}
        />

        <Route
          exact
          path='/actions'
          render={(props) => <Actions {...props} actions={this.state.actions} />}
        />

        <Route
          exact
          path='/actions/:id'
          render={(props) => <Action {...props} actions={this.state.actions} />}
        />

      </div>
    );
  }
}

export default App;