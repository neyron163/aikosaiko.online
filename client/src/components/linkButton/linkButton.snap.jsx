import React from 'react';
import renderer from 'react-test-renderer';

import {LinkButton} from './linkButton';

jest.mock('react-router-dom', () => ({Link: 'Link'}));

describe('<LinkButton />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<LinkButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if children exist', () => {
        const tree = renderer.create(<LinkButton> children </LinkButton>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});