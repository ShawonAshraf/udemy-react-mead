import React from 'react';

// actions
// converted to functional component
const Action = (props) => (
  <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}>
      What to do?
      </button>
  </div>
);

export default Action;
