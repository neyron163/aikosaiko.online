import React, {useState} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {API_URL} from 'config';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {ProductsType} from 'constants/types/products';
import {Search} from 'components/search/search';
import {ProductItem} from 'components/productItem/productItem';
import {NotFound} from 'components/notFound/notFound';

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
    const [value, setValue] = useState('');
    const {products, loading} = data!;
    if (loading) return null;

    const filtered = products.filter(
        ({name}: {name: string}) => !name.indexOf(value.toLowerCase()),
    );
    const isResult = Boolean(value && !filtered.length);

    return (
        <>
            {isResult && <NotFound />}
            <Search render={(value: string) => setValue(value)} />
            {isResult && 'Возможно вам будет интерестно это'}
            <div className={s.wrapper}>
                <div className={s.itemBox}>
                    {filtered.length
                        ? filtered.map(
                              ({id, name, img, views, rating, votes, place}: ProductsType) => (
                                  <ProductItem
                                      key={id}
                                      id={id}
                                      name={name}
                                      img={img}
                                      views={views}
                                      rating={rating}
                                      votes={votes}
                                      place={place}
                                  />
                              ),
                          )
                        : products.map(
                              ({id, name, img, views, rating, votes, place}: ProductsType) => (
                                  <ProductItem
                                      key={id}
                                      id={id}
                                      name={name}
                                      img={img}
                                      views={views}
                                      rating={rating}
                                      votes={votes}
                                      place={place}
                                  />
                              ),
                          )}
                </div>
            </div>
        </>
    );
};
// @ts-ignore
export const ProductsQuery = graphql(GET_PRODUCTS)(Products);
