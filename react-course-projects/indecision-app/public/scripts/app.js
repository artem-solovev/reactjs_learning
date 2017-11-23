console.log( "Here it is!!!" );

var template = React.createElement(
    "h1",
    { id: "someId" },
    "Something new"
);

var appRoot = document.getElementById( "app" );

ReactDOM.render( template, appRoot );