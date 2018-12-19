class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi! ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class UndeadTraveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    return `${greeting}, you've come far from ${this.homeLocation}. Do you need some souls?`;
  }
}

const ashenOne = new UndeadTraveller('Ashen One', 9999, 'Lothric');
console.log(ashenOne);
console.log(ashenOne.getGreeting());
