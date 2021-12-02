# Advanced react

## Higher-order copmonents

We can have HOC components to store a common functionality and then we can wrap other components into these HOC components.

Example: We create a tooltip HOC component and then we want to pass this functionality to a movie component:

withTooltip hoc:
```javascript
import React from "react";

//Component argument is with capital C otherwise the html would not work.
function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false,
    };

    onMouseOver = () => this.setState({ showTooltip: true });
    onMouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
```

movie component:
```javascript
import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>some tooltip...</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);
```

App:
```javascript
function App() {
  return <Movie id={1} />;
}
```