class Counter extends React.Component {
    constructor( props ) {
        super( props );
        this.handleMinusOne = this.handleMinusOne.bind( this );
        this.handlePlusOne = this.handlePlusOne.bind( this );
        this.handleReset = this.handleReset.bind( this );
    }

    handleMinusOne() {
        console.log( 'handleMinusOne' );
    }

    handlePlusOne() {
        console.log( 'handlePlusOne' );
    }

    handleReset() {
        console.log( 'handleReset' );
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick = { this.handleMinusOne }>+1</button>
                <button onClick = { this.handlePlusOne }>-1</button>
                <button onClick = { this.handleReset }>reset</button>
            </div>
        );
    }
}

ReactDOM.render( <Counter />, document.getElementById( 'app' ) );