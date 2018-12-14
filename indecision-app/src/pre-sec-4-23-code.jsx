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
let count = 0;

// functions for manipulating counter
const addOne = () => {
  count += 1;
  renderCounter();
};

const minusOne = () => {
  count -= 1;
  renderCounter();
};

const reset = () => {
  count = 0;
  renderCounter();
};

ReactDOM.render(templateThree, appRoot);

const renderCounter = () => {
  const templateThree = (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
};

// renderCounter();

// visibility toggle challenge code
let visible = false;
const toggleVisibility = () => {
  visible = !visible;
  renderFour();
};

const renderFour = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visible ? 'Hide Details' : 'Show Details'}
      </button>
      {visible && (
        <div>
          <p>Abra ka dabra!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
// renderFour();
