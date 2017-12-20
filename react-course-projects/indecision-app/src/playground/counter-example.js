class Counter extends React.Component {
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