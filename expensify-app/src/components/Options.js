import React from 'react';

import Option from './Option';

// options class
// contains all the options
// converted to functional component
const Options = (props) => {
  const { options } = props;
  return (
    <div>
      <div className={"widget-header"}>
        <h3 className={"widget-header__title"}>Your Options</h3>
        <button
          className={"button button__link"}
          onClick={props.handler}
          disabled={!props.hasOptions}
        >Remove All</button>
      </div>
      {options.length === 0 && <p className={"widget__message"}>Please add an option to get started!</p>}
      {
        options.length > 0 && options.map((option, index) => <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption} />)
      }
    </div>
  );
};

export default Options;
