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
