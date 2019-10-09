import React from 'react';
import renderer from 'react-test-renderer';

import {Products} from './products';

jest.mock('@material-ui/core/TextField', () => 'TextField');

describe('<Products />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Products />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
