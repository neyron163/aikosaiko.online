import React from 'react';
// import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {API_URL} from 'config';

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

interface PropsType {
    data: {
        products: ProductsType[];
        loading: boolean;
    };
}

const data = {
    products: [
        {
            id: 1,
            name: 'Хвост Феи ТВ-1',
            img: 'https://yummyanime.club/img/posters/1570976911.jpg',
            age: 13,
            place: 1,
            rating: '9.06',
            votes: '24907',
            views: '10 0000',
            genre: ['Сёнэн', 'Комедия', 'Приключения', 'Фэнтези', 'Драконы', 'Магия', 'Экшен'],
            type: 'Сериал',
            year: 2009,
            status: 'онгоинг',
            studio: ['A-1 Pictures', 'Satelight'],
            series: 175,
        },
    ],
    loading: false,
};
/**
 * Products component
 */
// export const Products: React.FC<PropsType> = ({data}) => {
export const Products = () => {
    const {products, loading} = data;
    if (loading) return null;
    return (
        <div className={s.wrapper}>
            <div className={s.itemBox}>
                {products.map(({id, name, img}: ProductsType) => (
                    <div className={s.item} key={id}>
                        <figure className={s.itemFigure}>
                            <img src={`${API_URL}${img}`} alt={name} />

                            <figcaption className={s.itemDescription}>
                                <div className={s.itemTopLine}>
                                    <span className={s.itemNum}>{`# ${id}`}</span>
                                    <p className={s.itemName}>{name}</p>
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
// @ts-ignore
// export const ProductsQuery = graphql(GET_PRODUCTS)(Products);
export const ProductsQuery = Products;
