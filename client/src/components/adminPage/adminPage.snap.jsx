import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import {AdminPage} from './adminPage';

jest.mock('./sideBar/sideBar', () => ({SideBar: 'SideBar'}));
jest.mock('./products/products', () => ({ProductsQuery: 'ProductsQuery'}));

describe('<AdminPage />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <MemoryRouter initialEntries={['/']}>
                <AdminPage />
            </MemoryRouter>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
