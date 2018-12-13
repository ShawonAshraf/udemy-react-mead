console.log('App.js is running');
console.log('Live re-compile turned on!');
console.log('Ayee it works!');


// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

// Challenge code # 2
const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
};

const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
    </div>
);

// challenge code # 1
const me = {
  name: "Shawon",
  city: "Dhaka",
  dinner: "Kacchi",
};

// use {} when rendering data from object
// or json, also known as JSX Expressions.
const templateTwo = (
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

const appRoot = document.getElementById("app");
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
