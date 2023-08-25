import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = React.createElement("h1", {id:'heading'}, "This is from React");
// JSX => bable converts JSX to the React.createElement => ReactElement-JS Object => HTML Element (Render)


// Component Composition
const App = () => (
  <div>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
