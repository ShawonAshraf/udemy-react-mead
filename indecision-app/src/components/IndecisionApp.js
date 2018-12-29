import React from 'react';

// import components
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // define state
    this.state = {
      options: [],
    };

    // binding
    this.handleReset = this.handleReset.bind(this);
    this.handlerPick = this.handlerPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    // options
    const options = this.state.options;

    return (
      <div>
        <Header />
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlerPick}
        />
        <Options
          options={options}
          handler={this.handleReset}
          handleDeleteOption={this.handleDeleteOption}
        >
        </Options>
        <AddOptions
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }

  // function
  handleReset() {
    this.setState(() => ({
      options: []
    }));
  }

  handlerPick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Option can\'t\ be empty';
    } if (this.state.options.includes(option)) {
      return 'Option already exists!';
    } else {
      this.setState((state) => {
        return {
          options: state.options.concat([option])
        };
      });
    }
  }

  handleDeleteOption(optionToRemove) {
    // splicing is faster than filtering
    const options = this.state.options;
    const index = options.indexOf(optionToRemove);
    options.splice(index, 1);

    this.setState(() => ({
      options: options
    }));
  }

  // lifecycle functions
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing, let it silently fail
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('unmounted');
  }
}
