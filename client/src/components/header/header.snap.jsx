import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from './header';

jest.mock('../linkButton/linkButton', () => ({LinkButton: 'LinkButton'}));

describe('<Header />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if night true', () => {
        const tree = renderer.create(<Header night />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
