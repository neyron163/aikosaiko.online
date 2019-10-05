import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ProductsQuery} from './products/products';
import {Header} from './header/header';
import {PageNotFound} from './pageNotFound/pageNotFound';

/**
 * The main App component
 */
export const App: React.FC = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <ProductsQuery />
            </Route>
            <Route>
                <PageNotFound />
            </Route>
        </Switch>
    </Router>
);
