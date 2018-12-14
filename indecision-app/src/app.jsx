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
    // console.log(option);
    console.log('option updated => re rendering');
  } else {
    console.log('options is empty');
  }
};

// clear the array
const resetOptions = () => {
  if (app.options.length > 0) {
    app.options.length = 0;
    // log and render
    console.log('options cleared');
    renderOptionsChange();
  }
}

// handle event for what should I do
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  // console.log(randomNum);
};

// re render and update options array
const renderOptionsChange = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle ? <p>{app.subtitle}</p> : ''}
      <p>{app.options.length > 0 ? 'Here are your options' : 'You\'ve\ no options'}</p>
      {/* {
        numbers.map((num) => {
          return <p key={num}>Number : {num}</p>;
        })
      } */}
      <ol>
        {
          // render app.options
          app.options.map(
            (option) => <li key={option}>{option}</li>
          )
        }
      </ol>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button disabled={app.options.length === 0} onClick={resetOptions}>Remove all</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div >
  );

  ReactDOM.render(template, appRoot);
};
// call
renderOptionsChange();

