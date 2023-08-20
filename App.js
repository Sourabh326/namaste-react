import React from 'react';
import ReactDOM from 'react-dom';
{
  /* <div id='parent'>
    <div id='child'>
        <h1>this is h1 tag</h1>
    </div>
    <div id='child2'>
        <h1>this is h1 tag</h1>
    </div>
</div> */
}
const heading = React.createElement("div", { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "this is h1 tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
