import React from 'react';

import s from './notFound.module.scss';

export const NotFound = () => (
    <div className={s.notFound}>
        <div>Результаты поиска</div>
        <div>
            К сожалению, по вашему запросу ничего не найдено. Попробуйте указать другое название.
        </div>
    </div>
);
