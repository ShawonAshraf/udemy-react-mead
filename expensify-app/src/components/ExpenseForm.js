import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description
      };
    });
  };

  render() {
    return <div>
      <form>
        <input
          type={"text"}
          placeholder={"Description"}
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          type={"number"}
          placeholder={"Amount"}
        />

        <textarea placeholder={"Add a note for your expense"}/>
        <button>Submit</button>
      </form>
    </div>
  };
}