console.log('App.js is running');


// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

var template = <h1>This is JSX from app.js!</h1>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);