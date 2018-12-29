import React from 'react';

import Option from './Option';

// options class
// contains all the options
// converted to functional component
const Options = (props) => {
  const { options } = props;
  return (
    <div>
      <button onClick={props.handler} disabled={!props.hasOptions}>Remove All</button>
      {options.length === 0 && <p>Please add an option to get started!</p>}
      {
        options.length > 0 && options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
      }
    </div>
  );
};

export default Options;
