class Person {
  constructor(name = 'Anonymous') {
    this.name = name;
  }

  getGreeting() {
    return `Hi! ${this.name}`;
  }
}

const me = new Person('Shawon Ashraf');
console.log(me);
console.log(me.getGreeting());

const other = new Person();
console.log(other);
console.log(other.getGreeting());