import React from 'react';

export default class AddOptions extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    // bind
    this.handleAddOption = this.handleAddOption.bind(this);
    // state
    this.state = {
      error: '',
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (error) {
      this.setState(() => ({ error }));
    } else {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Add a decision" />
          <button>Add!</button>
        </form>
      </div>
    );
  }
}
