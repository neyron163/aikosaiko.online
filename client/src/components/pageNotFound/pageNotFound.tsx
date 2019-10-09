import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import {ADMIN} from 'constants/pathNames';

interface PropsType extends RouteComponentProps<any> {}

/**
 * PageNotFound
 */
export const PageNotFound: React.FC<PropsType> = ({location}) => {
    if (location.pathname.slice(0, 6) === ADMIN) return null;
    return <div>404 - page not found</div>;
};

export const PageNotFoundWithRouter = withRouter(PageNotFound);
