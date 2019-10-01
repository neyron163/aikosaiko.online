import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Grid} from './grid/Grid';
import {Header} from './header/header';

/**
 * The main App component
 */
export const App: React.FC = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={() => <Grid />} />
            <Route component={() => <div>404 - page not found</div>} />
        </Switch>
    </Router>
);
