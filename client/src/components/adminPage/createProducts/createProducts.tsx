import React, {useState} from 'react';
import {graphql} from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import {compose} from 'recompose';
import SaveIcon from '@material-ui/icons/Save';
import {TEXT_FILEDS} from 'constants/admin';
import Button from '@material-ui/core/Button';
import {GET_PRODUCTS, SET_PRODUCTS, UPLOAD_FILE} from './query';

import s from './createProducts.module.scss';

/**
 * Products component
 */
export const CreateProducts = ({mutate, data: {refetch}}: any) => {
    const [values, setValues] = useState({
        name: '',
        age: '',
        img: '',
        place: '',
        rating: '',
        votes: '',
        views: '',
        genre: '',
        type: '',
        year: '',
        status: '',
        studio: '',
        series: '',
    });
    // const [file, setFile] = useState(new FormData());

    /**
     * handleChange
     * @param name
     */
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [name]: event.target.value});
    };

    const onChange = ({target: {validity, files: [file]}}: any) => {
        // const formData = new FormData();
        // if (e.target.files) formData.append('image', e.target.files[0]);
        // mutate({ variables: { file: formData } })
        // const {target} = e;
        // console.log(file,  ' file');
        // validity.valid && mutate({ variables: { file } })
        const reader = new FileReader();
        reader.onload = ({target: {result}}: any) => {
            console.log(result);
            mutate({
                variables: {
                    file: {
                        filename: 'name',
                        encoding: result,
                    }
                }
            })
        };

        reader.readAsDataURL(file);
    };
    /**
     * sendData
     */
    const sendData = (event: any) => {
        event.preventDefault();
        const {
            name,
            age,
            img,
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
        } = values;
        mutate({
            variables: {
                input: {
                    name,
                    age: Number(age),
                    img,
                    place: Number(place),
                    rating,
                    votes,
                    views: Number(views),
                    genre,
                    type,
                    year: Number(year),
                    status,
                    studio,
                    series: Number(series),
                },
            },
        }).then(refetch);

        // setValues({
        //     name: '',
        //     age: '',
        //     img: '',
        //     place: '',
        //     rating: '',
        //     votes: '',
        //     views: '',
        //     genre: '',
        //     type: '',
        //     year: '',
        //     status: '',
        //     studio: '',
        //     series: '',
        // });
    };
    return (
        <form onSubmit={sendData} className={s.createProducts}>
            <div className={s.container}>
                {TEXT_FILEDS.map(({name, type, label, required}) => (
                    <TextField
                        id={`standard-${name}`}
                        required={required}
                        label={label}
                        className={s.textField}
                        value={(values as any)[name]}
                        type={type}
                        onChange={handleChange(name)}
                        margin="normal"
                    />
                ))}
            </div>
            <input
                onChange={onChange}
                required
                accept="image/*"
                className={s.input}
                id="contained-button-file"
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            {/* <img src={file} /> */}
            <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </form>
    );
};

export const CreateProductsQuery = compose(
    graphql(SET_PRODUCTS),
    graphql(GET_PRODUCTS),
    graphql(UPLOAD_FILE),
)(CreateProducts);
