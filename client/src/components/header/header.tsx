import React from 'react';
import bg from './images/background.jpg';

import s from './header.module.scss';

export const Header = () => (
    <header className={s.header}>
        <img className={s.img} src={bg} alt="header" />
    </header>
);
