import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {API_URL} from 'config';
import {ProductsType} from 'constants/types/products';

import s from './product.module.scss';

export const SET_PRODUCT = gql`
    mutation($id: ID!) {
        product(id: $id) {
            name
            img
            age
            place
            rating
            votes
            views
            genre
            type
            year
            status
            studio
            series
        }
    }
`;

interface PropsType {
    data: {
        product: ProductsType;
        loading: boolean;
    };
    id: string;
}

/**
 * Products component
 */
export const Product: React.FC<any> = ({mutate, id}) => {
    const [product, setProduct] = useState({
        name: '',
        img: '',
        age: null,
        place: '',
        rating: '',
        votes: '',
        views: '',
        type: '',
        year: '',
        status: '',
        series: '',
    });
    useEffect(() => {
        mutate({
            variables: {
                id,
            },
        }).then(({data: {product}}: any) => setProduct(product));
    }, []);

    const {
        name,
        img,
        age,
        place,
        rating,
        votes,
        views,
        type,
        year,
        status,
        series,
    } = product;

    return (
        <div className={s.product}>
            <div>{name}</div>
            <div className={s.container}>
                <div className={s.image}>
                    <img src={`${API_URL}${img}`} alt={name} />
                </div>
                <div className={s.description}>
                    <div>{age}</div>
                    <div>{place}</div>
                    <div>{rating}</div>
                    <div>{votes}</div>
                    <div>{views}</div>
                    <div>{type}</div>
                    <div>{year}</div>
                    <div>{status}</div>
                    <div>{series}</div>
                </div>
            </div>
        </div>
    );
};
// @ts-ignore
export const ProductQuery = graphql(SET_PRODUCT)(Product);
// export const ProductQuery = Product;
