// const parent = React.createElement(
//     "div",{id:"parent"}, 
//     React.createElement('div',{id:'child'},
//     [React.createElement('h1',{},"I am an h1 tag"), React.createElement('h2',{},"I am an h2 tag"), React.createElement('h3',{},'I am an h3 tag')]
//     )
//     );

// console.log(parent)

const parent = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement("h1",{},"I'm h1 tag"),React.createElement('h2',{},"I'm h1 tag")])],[React.createElement('div',{id:"child2"},[React.createElement('h1',{},"I'm h1 tag"),React.createElement('h2',{},"I'm h2 tag")])])








// const heading = React.createElement(
//     "h1",{id:"heading"},"Hello World from React!!!");

//     console.log(heading);
        

        const root = ReactDOM.createRoot(document.getElementById('header'));

        root.render(parent) 


