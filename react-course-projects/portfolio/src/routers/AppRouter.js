import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Parts
import Header from '../components/Header';

// Pages
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path = "/" component = { HomePage } exact = { true } />
                <Route path = "/portfolio" component = { PortfolioPage } exact = { true } />
                <Route path = "/portfolio/:id" component = { PortfolioItemPage } />
                <Route path = "/contact" component = { ContactPage } />
                <Route component = { NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;