import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import classNames from 'classnames';

import s from './products.module.scss';

export const GET_PRODUCTS = gql`
    query data {
        products {
            id
            name
            img
        }
    }
`;

interface ProductsType {
    id: number;
    name: string;
    img: string;
}

/**
 * Products component
 */
export const Products = () => {
    const {loading, data} = useQuery(GET_PRODUCTS);
    if (loading) return null;
    const {products} = data;
    return (
        <div className={classNames(s.wrapper)}>
            <aside className={classNames(s.leftBar)}></aside>
            <div className={classNames(s.itemBox)}>
                {products.map(({id, name, img}: ProductsType) => (
                    <div className={classNames(s.item, s.itemCard)} key={id}>
                        <figure className={classNames(s.itemFigure)}>
                            <img src={img} alt="image" />
                            <figcaption className={classNames(s.itemDescription)}>
                                <div className={classNames(s.itemTopLine)}>
                                    <span className={classNames(s.itemNum)}>{`# ${id}`}</span>
                                    <p className={classNames(s.itemName)}>{name}</p>
                                    <p className={s.views}>Просмотров: 1000</p>
                                    <footer className={s.itemFooter}>
                                        <p className={s.rating}>8.5</p>
                                        <p className={s.votes}>({id} голосов)</p>
                                    </footer>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
};
