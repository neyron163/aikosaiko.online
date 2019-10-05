import React from 'react';
import renderer from 'react-test-renderer';

import {PageNotFound} from './pageNotFound';

describe('<PageNotFound />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<PageNotFound />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
