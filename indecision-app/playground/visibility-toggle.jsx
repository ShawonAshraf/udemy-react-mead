class VisibiltyToggle extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    // define state
    this.state = {
      visibility: true
    };
  }
  // render
  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1>VisibiltyToggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {
          visibility && (
            <div>
              <p>Hey there!</p>
            </div>
          )
        }
      </div>
    );
  }

  // functions
  handleToggleVisibility() {
    // setState
    this.setState((state) => {
      return {
        visibility: !state.visibility
      };
    });
  }
}
