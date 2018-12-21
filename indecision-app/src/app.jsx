// components
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    // options
    const options = ['One thing', 'Another thing'];

    return (
      <div>
        <Header title={title} subTitle={subTitle}></Header>
        <Action></Action>
        <Options options={options}></Options>
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
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What to do?</button>
      </div>
    );
  }
}


// options class
// contains all the options
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options);
  }
  render() {
    const { options } = this.props;
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {
          options.map((option) => {
            return <Option key={option} optionText={option}></Option>;
          })
        }
      </div>
    );
  }
}
// a single option
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Add a decision"></input>
          <button>Add!</button>
        </form>
      </div>
    );
  }
}

// visibility toggler

// render jsx
const jsx = <IndecisionApp></IndecisionApp>;
ReactDOM.render(jsx, document.getElementById('app'));
