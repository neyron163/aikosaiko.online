import React from 'react';
import renderer from 'react-test-renderer';

import {Products} from './products';

let props;

beforeEach(() => {
    props = {
        data: {
            products: [
                {
                    id: 1,
                    name: 'name',
                    img: 'img',
                }
            ]
        },
        loading: false,
    }
})

describe('<Products />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Products {...props} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render correctly if loading true', () => {
        props.data.loading = true;
        const tree = renderer.create(<Products {...props} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
