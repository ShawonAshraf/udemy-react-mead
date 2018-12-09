console.log('App.js is running');
console.log('Live re-compile turned on!');
console.log('Ayee it works!');


// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

var template = <h1>Indecison App</h1>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);