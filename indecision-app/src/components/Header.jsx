import React from 'react';
import ReactDOM from 'react-dom';

// header
// functional
const Header = (props) => {
  const { title, subTitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};
// default props
Header.defaultProps = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
};

export default Header;
