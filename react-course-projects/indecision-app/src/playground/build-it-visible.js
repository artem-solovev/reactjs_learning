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
                <button onClick = { this.handleVisibilityToggle }>
                    { this.state.visibility ? 'Hide details' : 'Show details' }
                </button>
                { this.state.visibility && (
                    <p>Hidden text</p>
                ) }
            </div>
        );
    }
}

ReactDOM.render( <VisibilityToggle />, document.getElementById( "app" ) );