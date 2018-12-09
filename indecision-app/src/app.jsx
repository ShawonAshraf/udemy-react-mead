console.log('App.js is running');
console.log('Live re-compile turned on!');
console.log('Ayee it works!');


// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

var template = <div> <h1> Indecison App </h1> <p>This is some paragraph text</p> </div>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
