import React from 'react';

// header
// functional
const Header = (props) => {
  const { title, subTitle } = props;
  return (
    <div className={"header"}>
      <h1 className={"header__title"}>{title}</h1>
      <h2 className={"header__subtitle"}>{subTitle}</h2>
    </div>
  );
};
// default props
Header.defaultProps = {
  title: 'Indecision',
  subTitle: 'Put your life in the hands of a computer',
};

export default Header;
