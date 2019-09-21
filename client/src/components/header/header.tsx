import React from 'react';
import bg from './images/background.jpg';

import { BrowserRouter as Router } from "react-router-dom";
import {LinkButton} from '../linkButton/linkButton';
import {nav} from './nav';

import s from './header.module.scss';

interface NavType {
    text: string;
    path: string;
}

export const Header = () => (
    <header className={s.header}>
        <img className={s.img} src={bg} alt="header" />
        <Router>
            <nav>
                <ul>
                    {nav.map(({text, path}: any) => (
                        <li><LinkButton path={path}>{text}</LinkButton></li>
                    ))}
                </ul>
            </nav>
        </Router>
    </header>
);
