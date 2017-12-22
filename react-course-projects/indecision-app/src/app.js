import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';
import Header from './components/Header.js';
import Action from './components/Action.js';
import Options from './components/Options.js';
import AddOption from './components/AddOption.js';
import Option from './components/Option.js';

ReactDOM.render( <App options = { [ 'test', '123' ] } />, document.getElementById( 'app' ) );