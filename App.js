import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const Title = () =>  (
<h1 id="heading" tabIndex="1" className="root">Namaste React using JSX 🚀</h1>
);

// React Elemet 

const title = (
    <h1 className="head">
        Namaste React using JSX </h1>
);

// const num = 10000;
const data = api.getData()


// React Component Functional Components

const HeadingComponent = () => (
    <div id="container">
        {data}
        <Title></Title>
     <h1 className="heading"> Namaste React Functional Component </h1>
     </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<HeadingComponent></HeadingComponent>);


