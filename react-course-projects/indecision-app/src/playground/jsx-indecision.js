console.log( "Here it is!!!" );

let app = {
    title: "To do app",
    subtitle: "Show me your goals",
    options: []
};

const onFormSubmit = ( e ) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if ( option ) {
        app.options.push( option );
        e.target.elements.option.value = '';
    }
};

const template = <div>
                    <h1>{ app.title }</h1>
                    <p>{ app.subtitle }</p>
                    <p>{app.options.length}</p>
                    <ol>
                        <li>Item one</li>
                        <li>Item two</li>
                    </ol>

                    <form onSubmit ={onFormSubmit}>
                        <input type = "text" name = "option" />
                        <button>Add Option</button>
                    </form>
                </div>;


const appRoot = document.getElementById( "app" );

ReactDOM.render( template, appRoot );