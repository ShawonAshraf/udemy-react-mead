import React from 'react';

// a single option
// converted to functional components
const Option = (props) => (
  <div>
    {props.optionText}
    <button onClick={(e) => {
      props.handleDeleteOption(props.optionText);
    }}>
      Remove
      </button>
  </div>
);

export default Option;