class Counter extends React.Component {
    constructor( props ) {
        super( props );
        this.handleMinusOne = this.handleMinusOne.bind( this );
        this.handlePlusOne = this.handlePlusOne.bind( this );
        this.handleReset = this.handleReset.bind( this );

        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem( 'count' );
        const count = parseInt( stringCount, 10 );

        if ( !isNaN( count ) ) {
            this.setState( () => ( { count } ) );
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if ( prevState.count !== this.state.count ) {
            localStorage.setItem( 'count', this.state.count );
        }
    }

    handleMinusOne() {
        this.setState( ( prevState ) => {
            return {
                count: prevState.count - 1
            };
        } );
    }

    handlePlusOne() {
        this.setState( ( prevState ) => {
            return {
                count: prevState.count + 1
            };
        } );
    }

    handleReset() {
        this.setState( () => {
            return {
                count: 0
            };
        } );
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick = { this.handlePlusOne }>+1</button>
                <button onClick = { this.handleMinusOne }>-1</button>
                <button onClick = { this.handleReset }>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render( <Counter />, document.getElementById( 'app' ) );