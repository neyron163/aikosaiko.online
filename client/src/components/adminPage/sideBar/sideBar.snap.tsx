import React from 'react';
import renderer from 'react-test-renderer';

import {SideBar} from './sideBar';

jest.mock('components/linkButton/linkButton', () => ({LinkButton: 'LinkButton'}));

describe('<SideBar />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<SideBar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
