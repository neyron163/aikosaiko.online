import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {API_URL} from 'config';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {ProductsType} from 'constants/types/products';

import s from './products.module.scss';

export const GET_PRODUCTS = gql`
    query data {
        products {
            id
            name
            img
            views
            rating
            votes
            place
        }
    }
`;

interface PropsType {
    data: {
        products: ProductsType[];
        loading: boolean;
    };
}

/**
 * Products component
 */
export const Products: React.FC<PropsType> = ({data}) => {
    const {products, loading} = data!;
    if (loading) return null;

    return (
        <div className={s.wrapper}>
            <div className={s.itemBox}>
                {products.map(({id, name, img, views, rating, votes, place}: ProductsType) => (
                    <Link to={`/item/${id}`}>
                        <figure className={s.item} key={id}>
                            <img src={`${API_URL}${img}`} alt={name} />

                            <figcaption className={s.itemDescription}>
                                <div className={s.top}>
                                    <span className={s.itemNum}>{`# ${place}`}</span>
                                    <p className={s.itemName}>{name}</p>
                                </div>
                                <p className={s.views}>Просмотров: {views}</p>
                                <footer className={s.itemFooter}>
                                    <p className={s.rating}>{rating}</p>
                                    <p className={s.votes}>({votes} голосов)</p>
                                </footer>
                            </figcaption>
                        </figure>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// export const ProductsQuery = graphql(GET_PRODUCTS)(Products);
export const ProductsQuery = Products;
