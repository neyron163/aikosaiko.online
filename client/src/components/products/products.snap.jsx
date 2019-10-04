import React from 'react';
import renderer from 'react-test-renderer';

import {MockedProvider} from '@apollo/react-testing';
import wait from 'waait';

import {Products, GET_PRODUCTS} from './products';

jest.mock('react-router-dom', () => ({Link: 'Link'}));

const mocks = [
    {
        request: {
            query: GET_PRODUCTS,
        },
        result: {
            data: {
                products: {id: '1', name: 'title', img: 'img'},
            },
        },
    },
];

describe('<Products />', () => {
    it('should render correctly', async () => {
        const {act} = renderer;
        await act(async () => {
            const tree = renderer.create(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Products />
                </MockedProvider>,
            );
            await wait(0);

            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
});
