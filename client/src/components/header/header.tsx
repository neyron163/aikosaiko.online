import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import {LinkButton} from 'components/linkButton/linkButton';
import {ADMIN} from 'constants/pathNames';
import {Header as AdminHeader} from 'components/adminPage/header/header';

import white from './images/white.jpg';
import dark from './images/dark.jpg';
import {menu} from './nav';


import s from './header.module.scss';

interface PropsType extends RouteComponentProps<any> {
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
export const Header: React.FC<PropsType> = ({night = false, location}) => {
    if (location.pathname.slice(0, 6) === ADMIN) return <AdminHeader />;
    return (
        <header className={s.header}>
            <img className={s.img} src={night ? dark : white} alt="header" />
            <nav className={s.menu}>
                <div className={s.grid}>
                    <ul className={s.list}>
                        {menu.map(({text, path}: NavType) => (
                            <li key={text}>
                                <LinkButton path={path}>{text}</LinkButton>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export const HeaderWithRouter = withRouter(Header);
