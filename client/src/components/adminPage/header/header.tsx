import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import {LinkButton} from 'components/linkButton/linkButton';

import s from './header.module.scss';

export const Header = () => (
    <header className={s.container}>
        <div className={s.flex}>
            <div className={s.leftSide}>
                <div className={s.logo}>Admin Page</div>
            </div>
            <div className={s.rightSide}>
                <LinkButton path="/" icon="fas fa-home" className={s.button}>
                    Home page
                </LinkButton>
            </div>
        </div>
    </header>
);
