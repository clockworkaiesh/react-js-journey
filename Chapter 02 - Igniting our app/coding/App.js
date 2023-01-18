/*
*
* HMR - Hot module reload: makes your browser refresh automaticlly whenever you make any changes and save them
* Parcel does HMR using file watcher algorithm which is written in C++
* Building code
* Minifying Code
* Cleaning our codebase
* removing all the consoles
* dev and production build
* super fast build algorithm
* image optimization
* caching while development
* compression
* compatible with older versions of browsers
* HTTPS on development machine
* auto management and generation of port numbers for local host
* consistent hashing algorithm
* zero config
*
*
*
*
*
* TRANSITIVE DEPENDENCIES

*/


import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    id: "headingOne",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "headingTwo",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

console.log("this is react container", container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
