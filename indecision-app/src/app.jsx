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

// state counter example
class Counter extends React.Component {
  // handlers
  handleAddOne() {
    this.setState((state) => {
      return {
        count: state.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((state) => {
      if (state.count > 0) {
        return {
          count: state.count - 1
        };
      } else {
        alert('Count cannot be negative!');
        return {
          count: state.count
        };
      }
    });
  }
  resetHandler() {
    this.setState((state) => {
      return {
        count: 0
      };
    });
  }
  // override constructor
  constructor(props) {
    super(props);

    // bind functions
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.resetHandler = this.resetHandler.bind(this);

    // define state
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

// render jsx
// const jsx = <IndecisionApp></IndecisionApp>;
const jsx = <Counter></Counter>;
ReactDOM.render(jsx, document.getElementById('app'));
