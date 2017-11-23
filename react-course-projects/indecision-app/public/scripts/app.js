"use strict";

console.log("Here it is!!!");

var app = {
    title: "To do app",
    subtitle: "Show me your goals"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
