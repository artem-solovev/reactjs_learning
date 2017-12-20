class App extends React.Component {
    constructor( props ) {
        super( props );

        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handlePick = this.handlePick.bind( this );
        
        this.state = {
            options: ['Thing one', 'Second one', 'Third one']
        };
    }

    handleDeleteOptions() {
        this.setState( () => {
            return {
                options: []
            };
        } );
    }

    handlePick() {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[ randomNum ];
        alert( option );
    }

    render() {
        const title = "To do app";
        const subtitle = "Make your life";

        return (
            <div>
                <Header title = { title } subtitle = { subtitle } />
                <Action
                    hasOptions = { this.state.options.length > 0 }
                    handlePick = { this.handlePick }
                />
                <Options 
                    options = { this.state.options } 
                    handleDeleteOptions = { this.handleDeleteOptions }    
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
 render() {
     return <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subtitle }</h2>
            </div>;
 }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick = { this.props.handlePick }
                    disabled = { !this.props.hasOptions }
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {


    render() {
        return (
            <div>
                <button onClick = { this.props.handleDeleteOptions }>Remove all</button>
                {
                    this.props.options.map( ( option ) => <Option key = {option} optionText = { option }/> )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                { this.props.optionText }
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );