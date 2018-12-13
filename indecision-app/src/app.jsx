console.log('App.js is running');
console.log('Live re-compile turned on!');

// JSX - JavaScript XML
// switch default file handling in VSCode to JavaScript react for this to work
// because - typescript linters

// app root
const appRoot = document.getElementById("app");

// template 1
const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
};

// form submit function
const onFormSubmit = (e) => {
  // prevent the default event from taking place
  e.preventDefault();
  // alert('Form submitted');

  // get the value from the input field
  const option = e.target.elements.option.value;
  if (option) {
    // push to array
    app.options.push(option);
    // clear the field
    e.target.elements.option.value = '';

    // render
    renderOptionsChange();
    // log
    console.log(option);
    console.log('option updated => re rendering');
  } else {
    console.log('options is empty');
  }
};

// clear the array
const resetOptions = () => {
  if (app.options.length > 0) {
    app.options = [];
    // log and render
    console.log('options cleared');
    renderOptionsChange();
  }
}

// re render and update options array
const renderOptionsChange = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle ? <p>{app.subtitle}</p> : ''}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You\'ve\ no options'}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        <button onClick={resetOptions}>Remove all</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
// call
renderOptionsChange();

// template 2
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
// ReactDOM.render(templateTwo, appRoot);


// template 3 starts here
// events and attrs
// let count = 0;

// // functions for manipulating counter
// const addOne = () => {
//   count += 1;
//   renderCounter();
// };

// const minusOne = () => {
//   count -= 1;
//   renderCounter();
// };

// const reset = () => {
//   count = 0;
//   renderCounter();
// };

// ReactDOM.render(templateThree, appRoot);

// const renderCounter = () => {
//   const templateThree = (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateThree, appRoot);
// };

// renderCounter();
