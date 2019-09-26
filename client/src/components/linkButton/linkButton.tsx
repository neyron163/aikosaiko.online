import React from 'react';
import {Link} from 'react-router-dom';

export interface PropsType {
    path: string;
}

export const LinkButton: React.FC<PropsType> = ({children, path = '/'}) => <Link to={path}>{children}</Link>;
