// components
class IndecisionApp extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // define state
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 3']
    };

    // binding
    this.handleReset = this.handleReset.bind(this);
    this.handlerPick = this.handlerPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    // options
    const options = this.state.options;

    return (
      <div>
        <Header title={title} subTitle={subTitle}></Header>
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlerPick}
        ></Action>
        <Options
          options={options}
          handler={this.handleReset}></Options>
        <AddOptions
          handleAddOption={this.handleAddOption}
        ></AddOptions>
      </div >
    );
  }

  // function
  handleReset() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlerPick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Option can\'t\ be empty';
    } else if (this.state.options.includes(option)) {
      return 'Option already exists!';
    } else {
      this.setState((state) => {
        return {
          options: state.options.concat([option])
        }
      });
    }
  }
}

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

// actions
// converted to functional component
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What to do?
      </button>
    </div>
  );
};


// options class
// contains all the options
// converted to functional component
const Options = (props) => {
  const { options } = props;
  return (
    <div>
      <button onClick={props.handler}>Remove All</button>
      {
        options.length > 0 && options.map((option) => {
          return <Option key={option} optionText={option}></Option>;
        })
      }
    </div>
  );
};

// a single option
// converted to functional components
const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
};
class AddOptions extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    // bind
    this.handleAddOption = this.handleAddOption.bind(this);
    // state
    this.state = {
      error: ''
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (error) {
      this.setState(() => {
        return { error };
      });
    }
  }
  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Add a decision"></input>
          <button>Add!</button>
        </form>
      </div>
    );
  }
}

// functional user component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

// render jsx
const jsx = <IndecisionApp></IndecisionApp>;
ReactDOM.render(jsx, document.getElementById('app'));
