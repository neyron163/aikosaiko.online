import React from 'react';

import {LinkButton} from 'components/linkButton/linkButton';

import s from './sideBar.module.scss';

/**
 * Side bar on the left
 */
export const SideBar = () => {
    return (
        <div className={s.container}>
            <LinkButton path="/admin/listProducts" icon="fab fa-product-hunt">Products</LinkButton>
        </div>
    );
};
