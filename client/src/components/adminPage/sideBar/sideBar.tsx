import React from 'react';

import {LinkButton} from 'components/linkButton/linkButton';

import s from './sideBar.module.scss';

/**
 * Side bar on the left
 */
export const SideBar = () => (
    <div className={s.container}>
        <LinkButton path="/admin/createProducts">Create</LinkButton>
        <LinkButton path="/admin/listProducts">Products</LinkButton>
    </div>
);
