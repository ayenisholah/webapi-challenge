import React from 'react';

const Action = props => {
  const action = props.actions.find(action => action.id.toString() === props.match.params.id)
  return (
    <div className='action'>
      <h3>{action.description}</h3>
      <p>{action.notes}</p>
      <p>{action.completed}</p>
    </div>
  );
};

Action.defaultProps = {
  description: '',
  notes: '',
  completed: false
}

export default Action;