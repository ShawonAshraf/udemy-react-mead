import React from 'react';

// import components
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  // class props
  state = {
    options: [],
    selectedOption: undefined
  };

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    // options
    const options = this.state.options;

    return (
      <div>
        <Header />
        <div className={"container"}>
          <Action
            hasOptions={options.length > 0}
            handlePick={this.handlerPick}
          />
          <div className={"widget"}>
            <Options
              options={options}
              handler={this.handleReset}
              handleDeleteOption={this.handleDeleteOption}
              hasOptions={options.length > 0}
            >
            </Options>
            <AddOptions
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clear={this.handleClearSelectedOption}
        ></OptionModal>
      </div>
    );
  }

  // handlers
  handleReset = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handlerPick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  };

  handleAddOption = (option) => {
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
  };

  handleDeleteOption = (optionToRemove) => {
    // splicing is faster than filtering
    const options = this.state.options;
    const index = options.indexOf(optionToRemove);
    options.splice(index, 1);

    this.setState(() => ({
      options: options
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  };

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
