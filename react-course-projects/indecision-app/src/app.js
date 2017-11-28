console.log( "Here it is!!!" );

let app = {
    title: "To do app",
    subtitle: "Show me your goals"
};

const template = <div>
                    <h1>{ app.title }</h1>
                    <p>{ app.subtitle }</p>
                </div>;

let count = 0;

const addOne = () => {
    count++;
    console.log( 'addOne ', count );
};

const minusOne = () => {
    count--;
    console.log( 'minusOne ', count );
};

const reset = () => {
    count = 0;
    console.log( 'reset ', count );
};

const templateTwo = (
    <div>
        <h1>Count: { count } </h1>
        <button onClick = { addOne }>+1</button>
        <button onClick = { minusOne }>-1</button>
        <button onClick = { reset }>reset</button>
        <p>{count}</p>
    </div>
);

const appRoot = document.getElementById( "app" );

ReactDOM.render( templateTwo, appRoot );