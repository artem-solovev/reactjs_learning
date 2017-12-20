class VisibilityToggle extends React.Component {
    constructor( props ) {
        super( props );

        this.handleVisibilityToggle = this.handleVisibilityToggle.bind( this );

        this.state = {
            visibility: false
        };
    }

    handleVisibilityToggle() {
        this.setState( ( prevState ) => {
            return {
                visibility: !prevState.visibility
            };
        } );
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <p>Visibility status: { this.state.visibility.toString() }</p>
                <button onClick = { this.handleVisibilityToggle }>Click me</button>
                <p style = { {visibility: this.state.visibility ? 'visible' : 'hidden'} }>Hidden text</p>
            </div>
        );
    }
}

ReactDOM.render( <VisibilityToggle />, document.getElementById( "app" ) );