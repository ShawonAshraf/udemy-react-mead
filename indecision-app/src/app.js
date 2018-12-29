import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// new syntax
class NewSyntax {
  name = 'Jen';

  getGreeting = () => {
    return `hi, ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
console.log(newSyntax.getGreeting());
