import React from 'react';
import {API_URL} from 'config';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {ProductsType} from 'constants/types/products';

import s from './productItem.module.scss';

/**
 * ProductItem component
 */
export const ProductItem: React.FC<any> = React.memo(
    ({id, name, img, place, views, rating, votes}) => (
        <Link to={`/item/${id}`} className={s.item}>
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
        </Link>
    ),
);
