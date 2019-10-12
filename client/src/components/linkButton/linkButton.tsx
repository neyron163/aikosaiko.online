import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
// @ts-ignore
import {loadCSS} from 'fg-loadcss';

import s from './linkButton.module.scss';
export interface PropsType {
    path: string;
    children: string;
    className?: string;
    icon?: string;
}

/**
 * The link button component for domestic move
 * @param {PropsType} - props
 */
export const LinkButton: React.FC<PropsType> = ({children, path = '/', className, icon}) => {
    useEffect(() => {
        {
            icon &&
                loadCSS(
                    'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
                    document.querySelector('#font-awesome-css'),
                );
        }
    }, []);

    return (
        <Link to={path} className={classNames(s.link, className)}>
            {icon && (
                <span className={s.icon}>
                    <Icon className={icon} />
                </span>
            )}
            {children}
        </Link>
    );
};
