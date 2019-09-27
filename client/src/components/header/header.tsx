import React from 'react';

import white from './images/white.jpg';
import dark from './images/dark.jpg';
import {LinkButton} from '../linkButton/linkButton';
import {nav} from './nav';

import s from './header.module.scss';

interface PropsType {
    night?: boolean;
}
interface NavType {
    text: string;
    path: string;
}

/**
 * Header component
 * @param {Header} - props
 */
export const Header: React.FC<PropsType> = ({night = false}) => (
    <header className={s.header}>
        <img className={s.img} src={night ? dark : white} alt="header" />
        <nav className={s.menu}>
            <div className={s.grid}>
                <ul className={s.list}>
                    {nav.map(({text, path}: NavType) => (
                        <li key={text}>
                            <LinkButton path={path}>{text}</LinkButton>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
);
