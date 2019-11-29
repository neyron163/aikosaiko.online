import React, {useCallback} from 'react';

import s from './search.module.scss';

export const Search: React.FC<any> = React.memo(({render}) => {
    const onChange = useCallback(({target: {value}}) => {
        render(value);
    }, []);
    return <input onChange={onChange} placeholder="enter something" className={s.input} />;
});
