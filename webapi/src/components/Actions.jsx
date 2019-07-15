import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Action from './Action';


class Actions extends Component {
  render() {
    return (
      <div className='Actions-list-wrapper'>
        <h1>Actions List</h1>
        <ul>
          {this.props.actions.map(action => {
            return (
              <Link className='action-link' to={`/actions/${action.id}`} key={action.id}>
                <div className='action-card'>
                  <h2>{action.description}</h2>
                  <p>{action.notes}</p>
                  <p>{action.completed}</p>
                </div>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

Action.defaultProps = {
  action: [],
};

export default Actions;
