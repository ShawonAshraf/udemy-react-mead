import React from 'react';

// header
// functional
const Header = (props) => {
  const { title, subTitle } = props;
  return (
    <div className={"header"}>
      <div className={"container"}>
        <h1 className={"header__title"}>{title}</h1>
        <h2 className={"header__subtitle"}>{subTitle}</h2>
      </div>
    </div>
  );
};
// default props
Header.defaultProps = {
  title: 'Indecision',
  subTitle: 'Put your decisions in the hands of a computer',
};

export default Header;
