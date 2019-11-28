import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {API_URL} from 'config';
import {ProductsType} from 'constants/types/products';

import s from './product.module.scss';

export const GET_PRODUCTS = gql`
    query data {
        products {
            id
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
export const Product: React.FC<PropsType> = ({data, id}) => {
    const {product, loading} = data!;
    if (loading) return null;

    const {
        name,
        img,
        age,
        place,
        rating,
        votes,
        views,
        genre,
        type,
        year,
        status,
        studio,
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
                    <div>{genre.map(el => el)}</div>
                    <div>{type}</div>
                    <div>{year}</div>
                    <div>{status}</div>
                    <div>{studio.map(el => el)}</div>
                    <div>{series}</div>
                </div>
            </div>
        </div>
    );
};

// export const ProductQuery = graphql(GET_PRODUCTS)(Product);
export const ProductQuery = Product;
