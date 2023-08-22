import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h1", {id:'heading'}, "This is from React");


// JSX => bable converts JSX to the React.createElement => ReactElement-JS Object => HTML Element (Render)

// React Element
const heading = (
  <h1 className="head" tabIndex={5}>
    Namaste React from JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <h1 className="heading">Namaste React from React Functional Component</h1>
);

// Component Composition
const App = () => (
  <div className="main">
    {heading}
    <HeadingComponent />
    <h1>This is Component Composition</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
