console.log('App.js is running');
console.log('Live re-compile turned on!');

// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

// Challenge code # 2, 3
const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['one', 'two']
};

const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle ? <p>{app.subtitle}</p> : ''}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You\'ve\ no options'}</p>
    </div>
);

// challenge code # 1
const me = {
  name: "Shawon",
  city: "Dhaka"
};

// get location via a function
function getLocation(location) {
  if (location) {
    return (
        <p>
          Location: {location}
        </p>
    );
  } else {
    return 'Unknown';
  }
}

// use {} when rendering data from object
// or json, also known as JSX Expressions.
const templateTwo = (
    <div>
      <h1>{me.name}</h1>
      {getLocation(me.city)}
    </div>
);

const appRoot = document.getElementById("app");
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
