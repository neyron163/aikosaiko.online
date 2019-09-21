import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export interface PropsType {
    children: string;
    path: string;
}

export const LinkButton = ({children, path = '/'}: PropsType) => (
    <Link to={path}>
        {children}
    </Link>
);