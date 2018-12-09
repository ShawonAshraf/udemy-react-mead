"use strict";

console.log('App.js is running');
console.log('Live re-compile turned on!');
console.log('Ayee it works!'); // JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

var template = React.createElement("div", null, " ", React.createElement("h1", null, " Indecison App "), " ", React.createElement("p", null, "This is some paragraph text"), " ");
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
