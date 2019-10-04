import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Products} from './products/products';
import {Header} from './header/header';

/**
 * The main App component
 */
export const App: React.FC = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={() => <Products />} />
            <Route component={() => <div>404 - page not found</div>} />
        </Switch>
    </Router>
);
