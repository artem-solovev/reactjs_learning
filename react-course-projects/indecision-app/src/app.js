class App extends React.Component {
    constructor( props ) {
        super( props );

        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handlePick = this.handlePick.bind( this );
        this.handleAddOption = this.handleAddOption.bind( this );
        
        this.state = {
            options: props.options
        };
    }

    handleDeleteOptions() {
        this.setState( () => ( { options: [] } ) );
    }

    handlePick() {
        const randomNum = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[ randomNum ];
        alert( option );
    }

    handleAddOption( option ) {
        if ( !option ) {
            return 'Enter valid value to add item';
        } else if ( this.state.options.indexOf( option ) > -1 ) {
            return 'This option already exists';
        }

        this.setState( ( prevState ) => ( { options: prevState.options.concat( option ) } ) );
    }

    render() {
        const subtitle = "Make your life";

        return (
            <div>
                <Header subtitle = { subtitle } />
                <Action
                    hasOptions = { this.state.options.length > 0 }
                    handlePick = { this.handlePick }
                />
                <Options 
                    options = { this.state.options } 
                    handleDeleteOptions = { this.handleDeleteOptions }    
                />
                <AddOption 
                    handleAddOption = { this.handleAddOption }
                />
            </div>
        );
    }
}

App.defaultProps = {
    options: []
};

const Header = ( props ) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            { props.subtitle && <h2>{ props.subtitle }</h2> }
        </div>
    );
};

Header.defaultProps = {
    title: 'To do app'
};

const Action = ( props ) => {
    return (
        <div>
            <button
                onClick = { props.handlePick }
                disabled = { !props.hasOptions }
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = ( props ) => {
    return (
        <div>
            <button onClick = { props.handleDeleteOptions }>Remove all</button>
            {
                props.options.map( ( option ) => <Option key = {option} optionText = { option }/> )
            }
        </div>
    );
}

const Option = ( props ) => {
    return (
        <div>
            { props.optionText }
        </div>
    );
}

class AddOption extends React.Component {
    constructor( props ) {
        super( props );

        this.handleAddOption = this.handleAddOption.bind( this );

        this.state = {
            error: undefined
        };
    }

    handleAddOption( e ) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption( option );

        this.setState( () => ( { error } ) );
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit = { this.handleAddOption }>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <App options = { ['1', '2', '3'] } />, document.getElementById( 'app' ) );