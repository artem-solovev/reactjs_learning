import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>ExpenseDashboardPage</div>
);

const AddExpensePage = () => (
    <div>AddExpensePage</div>
);

const EditExpensePage = () => (
    <div>EditExpensePage</div>
);

const HelpPage = () => (
    <div>HelpPage</div>
);

const NotFoundPage = () => (
    <div>404</div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path = "/" component = { ExpenseDashboardPage } exact = { true } />
            <Route path = "/create" component = { AddExpensePage } />
            <Route path = "/edit" component = { EditExpensePage } />
            <Route path = "/help" component = { HelpPage } />
            <Route component = { NotFoundPage } />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById( 'app' ) );