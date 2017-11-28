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

var count = 0;

var addOne = function addOne() {
    count++;
    console.log('addOne ', count);
};

var minusOne = function minusOne() {
    count--;
    console.log('minusOne ', count);
};

var reset = function reset() {
    count = 0;
    console.log('reset ', count);
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count,
        " "
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "reset"
    ),
    React.createElement(
        "p",
        null,
        count
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
