import React from 'react';

export default class AddOptions extends React.Component {
  // class properties
  state = {
    error: undefined
  };
  // constructor
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (error) {
      this.setState(() => ({ error }));
    } else {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {
          this.state.error && <p className={"add-options-error"}>{this.state.error}</p>
        }
        <form className={"add-options-form"} onSubmit={this.handleAddOption}>
          <input
            className={"add-options-form__input"}
            type="text"
            name="option"
          />
          <button className={"button"}>Add!</button>
        </form>
      </div>
    );
  }
}
