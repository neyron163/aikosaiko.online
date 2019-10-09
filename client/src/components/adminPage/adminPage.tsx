import React from 'react';

import {SideBar} from './sideBar/sideBar';
import {ProductsQuery} from './products/products';
import {BrowserRouter as Router} from 'react-router-dom';

import s from './adminPage.module.scss';

/**
 * AdminPage
 */
export const AdminPage = () => (
    <div className={s.container}>
        <Router>
            <SideBar />
            <ProductsQuery />
        </Router>
    </div>
);
