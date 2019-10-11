import React from 'react';
// import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {compose} from 'recompose';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

export const GET_PRODUCTS = gql`
    query data {
        products {
            id
            name
            age
        }
    }
`;

export const SET_PRODUCTS = gql`
    mutation($input: create) {
        createProduct(input: $input) {
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

/**
 * Products component
 */
export const CreateProducts = ({mutate, data: {refetch}}: any) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        age: '',
        img: '',
    });

    /**
     * handleChange
     * @param name
     */
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [name]: event.target.value});
    };
    /**
     * sendData
     */
    const sendData = (event: any) => {
        event.preventDefault();
        const {name, age, img} = values;
        mutate({
            variables: {
                input: {
                    name,
                    age: Number(age),
                    img,
                },
            },
        }).then(refetch);
        setValues({
            name: '',
            age: '',
            img: '',
        });
    };
    return (
        <form onSubmit={event => sendData(event)}>
            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
            />
            <TextField
                id="standard-name"
                label="Age"
                className={classes.textField}
                value={values.age}
                onChange={handleChange('age')}
                margin="normal"
            />
            <TextField
                id="standard-name"
                label="Img"
                className={classes.textField}
                value={values.img}
                onChange={handleChange('img')}
                margin="normal"
            />
            <button type="submit">send</button>
        </form>
    );
};

export const CreateProductsQuery = compose(
    graphql(SET_PRODUCTS),
    graphql(GET_PRODUCTS),
)(CreateProducts);
