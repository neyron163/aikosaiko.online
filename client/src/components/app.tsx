import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ProductsQuery} from './products/products';
import {HeaderWithRouter} from './header/header';
import {PageNotFoundWithRouter} from './pageNotFound/pageNotFound';
import {AdminPage} from './adminPage/adminPage';

/**
 * The main App component
 */
export const App: React.FC = () => (
    <Router>
        <HeaderWithRouter />
        <Switch>
            <Route exact path="/">
                <ProductsQuery />
            </Route>
            <Route exact path="/news">
                news
            </Route>
            <Route exact path="/charity">
                charity
            </Route>
            <Route>
                <PageNotFoundWithRouter />
            </Route>
        </Switch>
        <Route path="/admin">
            <AdminPage />
        </Route>
    </Router>
);
