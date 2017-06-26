ReactDOM.render(
  React.DOM.h1( {
    className: 'title',
    id: 'element',
    style: {
      color: "red",
      fontFamily: "Verdana"
    }
  }, "Hello World!" ),
  document.getElementById( "app" )
);
