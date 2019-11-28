import React from 'react';
// import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {API_URL} from 'config';
import {BrowserRouter as Router, Link} from 'react-router-dom';

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
    age: number;
    place: number;
    rating: string;
    votes: string;
    views: number;
    genre: Array<string>;
    type: string;
    year: number;
    status: string;
    studio: Array<string>;
    series: number;
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
            img:
                'https://ae01.alicdn.com/kf/HTB12j80XifrK1RjSspbq6A4pFXae/Anime-Fairy-Tail-Posters-Wall-Stickers-Retro-Poster-Prints-High-Definition-For-Livingroom-Bedroom-Home-Decoration.jpg_q50.jpg',
            age: 13,
            place: 1,
            rating: '9.06',
            votes: '24907',
            views: 100000,
            genre: ['Сёнэн', 'Комедия', 'Приключения', 'Фэнтези', 'Драконы', 'Магия', 'Экшен'],
            type: 'Сериал',
            year: 2009,
            status: 'онгоинг',
            studio: ['A-1 Pictures', 'Satelight'],
            series: 175,
        },
        {
            id: 2,
            name: 'Хвост Феи ТВ-1',
            img:
                'https://ae01.alicdn.com/kf/HTB12j80XifrK1RjSspbq6A4pFXae/Anime-Fairy-Tail-Posters-Wall-Stickers-Retro-Poster-Prints-High-Definition-For-Livingroom-Bedroom-Home-Decoration.jpg_q50.jpg',
            age: 13,
            place: 2,
            rating: '9.06',
            votes: '24907',
            views: 203001,
            genre: ['Сёнэн', 'Комедия', 'Приключения', 'Фэнтези', 'Драконы', 'Магия', 'Экшен'],
            type: 'Сериал',
            year: 2009,
            status: 'онгоинг',
            studio: ['A-1 Pictures', 'Satelight'],
            series: 175,
        },
        {
            id: 3,
            name: 'Хвост Феи ТВ-1',
            img:
                'https://ae01.alicdn.com/kf/HTB12j80XifrK1RjSspbq6A4pFXae/Anime-Fairy-Tail-Posters-Wall-Stickers-Retro-Poster-Prints-High-Definition-For-Livingroom-Bedroom-Home-Decoration.jpg_q50.jpg',
            age: 13,
            place: 3,
            rating: '9.06',
            votes: '24907',
            views: 321000,
            genre: ['Сёнэн', 'Комедия', 'Приключения', 'Фэнтези', 'Драконы', 'Магия', 'Экшен'],
            type: 'Сериал',
            year: 2009,
            status: 'онгоинг',
            studio: ['A-1 Pictures', 'Satelight'],
            series: 175,
        },
        {
            id: 4,
            name: 'Хвост Феи ТВ-1',
            img:
                'https://ae01.alicdn.com/kf/HTB12j80XifrK1RjSspbq6A4pFXae/Anime-Fairy-Tail-Posters-Wall-Stickers-Retro-Poster-Prints-High-Definition-For-Livingroom-Bedroom-Home-Decoration.jpg_q50.jpg',
            age: 13,
            place: 4,
            rating: '9.06',
            votes: '24907',
            views: 333333,
            genre: ['Сёнэн', 'Комедия', 'Приключения', 'Фэнтези', 'Драконы', 'Магия', 'Экшен'],
            type: 'Сериал',
            year: 2009,
            status: 'онгоинг',
            studio: ['A-1 Pictures', 'Satelight'],
            series: 175,
        },
        {
            id: 5,
            name: 'Хвост Феи ТВ-1',
            img:
                'https://ae01.alicdn.com/kf/HTB12j80XifrK1RjSspbq6A4pFXae/Anime-Fairy-Tail-Posters-Wall-Stickers-Retro-Poster-Prints-High-Definition-For-Livingroom-Bedroom-Home-Decoration.jpg_q50.jpg',
            age: 13,
            place: 5,
            rating: '9.06',
            votes: '24907',
            views: 444555,
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
// @ts-ignore
// export const ProductsQuery = graphql(GET_PRODUCTS)(Products);
export const ProductsQuery = Products;
