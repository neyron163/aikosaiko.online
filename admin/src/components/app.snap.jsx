import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

jest.mock('./products/products', () => ({ProductsQuery: 'ProductsQuery'}));
jest.mock('./header/header', () => ({Header: 'Header'}));
jest.mock('./pageNotFound/pageNotFound', () => ({PageNotFound: 'PageNotFound'}));

describe('<App />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<App />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
