// const parent = React.createElement(
//     "div",{id:"parent"}, 
//     React.createElement('div',{id:'child'},
//     [React.createElement('h1',{},"I am an h1 tag"), React.createElement('h2',{},"I am an h2 tag"), React.createElement('h3',{},'I am an h3 tag')]
//     )
//     );

// console.log(parent)

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement("h1",{},"This is namaste react"),React.createElement('h2',{},"I'm h1 tag")])],[React.createElement('div',{id:"child2"},[React.createElement('h1',{},"I'm h1 tag"),React.createElement('h2',{},"I'm h2 tag")])])








// const heading = React.createElement(
//     "h1",{id:"heading"},"Hello World from React!!!");

//     console.log(heading);
        
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent) 


