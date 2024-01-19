import React from "react";
import ReactDOM from "react-dom/client";


const heading = (<h1 id="heading" tabIndex="1" className="root">Namaste React using JSX 🚀</h1>);


// React Component Functional Components

const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>;
}

const HeadingComponent3 = () => {
     <h1>Namaste React Functional Component</h1>;
}

const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(heading);


