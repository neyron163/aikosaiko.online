import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from './header';

jest.mock('../linkButton/linkButton', () => ({LinkButton: 'LinkButton'}));

let props;

beforeEach(() => {
    props = {
        night: false,
        location: {
            pathname: '/',
        },
    };
});

describe('<Header />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Header {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if night true', () => {
        props.night = true;
        const tree = renderer.create(<Header {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if pathname = admin', () => {
        props.location.pathname = '/admin';
        const tree = renderer.create(<Header {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
