console.log('App.js is running');
console.log('Live re-compile turned on!');
console.log('Ayee it works!');


// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

// var template = (
//   <div>
//     <h1> Indecison App </h1>
//     <p>This is some info</p>
//   </div>
// );

// challenge code # 1
const me = {
  name: "Shawon",
  city: "Dhaka",
  dinner: "Kacchi"
};

// use {} when rendering data from object
// or json
var template = (
  <div>
    <h1>{me.name}</h1>
    <p>
      <b>{me.city}</b>
    </p>
    <p>
      What did I have for dinner? <b>{me.dinner}</b>
    </p>
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
