"use strict";

console.log('App.js is running');
console.log('Live re-compile turned on!');
console.log('Ayee it works!'); // JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters
// Challenge code # 2

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), React.createElement("p", null, app.subtitle)); // challenge code # 1

var me = {
  name: "Shawon",
  city: "Dhaka",
  dinner: "Kacchi"
}; // use {} when rendering data from object
// or json, also known as JSX Expressions.

var templateTwo = React.createElement("div", null, React.createElement("h1", null, me.name), React.createElement("p", null, React.createElement("b", null, me.city)), React.createElement("p", null, "What did I have for dinner? ", React.createElement("b", null, me.dinner)));
var appRoot = document.getElementById("app"); // ReactDOM.render(templateTwo, appRoot);

ReactDOM.render(template, appRoot);
