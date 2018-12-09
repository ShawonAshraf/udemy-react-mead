console.log('App.js is running');


// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  "h1",
  null,
  "This is JSX from app.js!"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);