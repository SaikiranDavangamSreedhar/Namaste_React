import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1",{id:"heading"},"Namaste React🙏 🚵");

// JSX heading

const jsxHeading = (<h1 id="heading" tabIndex="1" className="root">Namaste React using JSX 🚀</h1>);

console.log(jsxHeading)
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(jsxHeading);


