import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {SideBar} from './sideBar/sideBar';
import {CreateProductsQuery} from './createProducts/createProducts';
import {ListProductsQuery} from './listProducts/listProducts';

import s from './adminPage.module.scss';

/**
 * AdminPage
 */
export const AdminPage = () => (
    <div className={s.container}>
        <Router>
            <SideBar />
            <Switch>
                <Route path="/admin/listProducts">
                    <ListProductsQuery />
                </Route>
                <Route path="/admin/createProducts">
                    <CreateProductsQuery />
                </Route>
            </Switch>
        </Router>
    </div>
);
