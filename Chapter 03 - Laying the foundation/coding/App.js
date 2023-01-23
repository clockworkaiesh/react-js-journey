import React from "react";
import Header from "./Header";
import ReactDOM from 'react-dom'

/*
- Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
- Create the same element using JSX
- Create a functional component of the same with JSX
- Pass attribute into the tag in JSX
- Composition of Component (Add a component inside another)
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
*/

const h1 = React.createElement('h1', {id: 'heading1'}, "first Heading")
const h2 = React.createElement('h2', {id: 'heading2'}, "second Heading")
const h3 = React.createElement('h3', {id: 'heading3'}, "three Heading")
const title = React.createElement('div', {className: 'title'}, 'This is a title div')
const header = React.createElement(
    'header', 
    {id: 'container'}, 
    [title, h1, h2, h3]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);

// function App() {
//   return (
//     <Header/>
//   )
// }
// export default App
