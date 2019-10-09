import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import {App} from './app';

jest.mock('./products/products', () => ({ProductsQuery: 'ProductsQuery'}));
jest.mock('./header/header', () => ({HeaderWithRouter: 'HeaderWithRouter'}));
jest.mock('./pageNotFound/pageNotFound', () => ({
    PageNotFoundWithRouter: 'PageNotFoundWithRouter',
}));
jest.mock('./adminPage/adminPage', () => ({AdminPage: 'AdminPage'}));

describe('<App />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render correctly if path admin', () => {
        const tree = renderer.create(
            <MemoryRouter initialEntries={['/admin']}>
                <App />
            </MemoryRouter>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render correctly if path random', () => {
        const tree = renderer.create(
            <MemoryRouter initialEntries={['/random']}>
                <App />
            </MemoryRouter>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
