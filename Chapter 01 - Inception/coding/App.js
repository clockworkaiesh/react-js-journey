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
