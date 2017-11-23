console.log( "Here it is!!!" );

var app = {
    title: "To do app",
    subtitle: "Show me your goals"
};

var template = <div>
                    <h1>{ app.title }</h1>
                    <p>{ app.subtitle }</p>
                </div>;

var appRoot = document.getElementById( "app" );

ReactDOM.render( template, appRoot );