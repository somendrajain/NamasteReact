const heading = React.createElement(
  "div",
  {
    id: "heading",
  },
  [
    React.createElement("h1", { id: "child" }, "I am H1"),
    React.createElement("h2", { id: "child2" }, "I am H2"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
