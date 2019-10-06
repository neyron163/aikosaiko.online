import React from 'react';
import {Link} from 'react-router-dom';

export interface PropsType {
    path: string;
    children: string;
}

/**
 * The link button component for domestic move
 * @param {PropsType} - props
 */
export const LinkButton: React.FC<PropsType> = ({children, path = '/'}) => (
    <Link to={path}>{children}</Link>
);
