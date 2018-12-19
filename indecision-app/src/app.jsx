// components
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle}></Header>
        <Action></Action>
        <Options></Options>
        <AddOptions></AddOptions>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    );
  }
}

// actions
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What to do?</button>
      </div>
    );
  }
}


// options class
// contains all the options
class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Your options are endless</p>
        <ol>
          <Option></Option>
        </ol>
      </div>
    );
  }
}
// a single option
class Option extends React.Component {
  render() {
    return <li>This is an option</li>;
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p>Add options here</p>
      </div>
    );
  }
}

// render jsx
const jsx = <IndecisionApp></IndecisionApp>;
ReactDOM.render(jsx, document.getElementById('app'));
