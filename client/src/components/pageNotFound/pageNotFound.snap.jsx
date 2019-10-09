import React from 'react';
import renderer from 'react-test-renderer';

import {PageNotFound} from './pageNotFound';

let props;

beforeEach(() => {
    props = {
        location: {
            pathname: '/',
        },
    };
});

describe('<PageNotFound />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<PageNotFound {...props} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render correctly if pathname = admin', () => {
        props.location.pathname = '/admin';
        const tree = renderer.create(<PageNotFound {...props} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
