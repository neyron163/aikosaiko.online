import React from 'react';
// import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {compose} from 'recompose';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';

import s from './listProducts.module.scss';

export const GET_PRODUCTS = gql`
    query data {
        products {
            id
            name
            age
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation($id: ID!) {
        deleteProduct(id: $id) {
            name
        }
    }
`;
interface ProductsType {
    id: number;
    name: string;
    age: number;
    rating: string;
    type: string;
}

interface PropsType {
    data: {
        products: ProductsType[];
        loading: boolean;
    };
}

/**
 * Products component
 */
export const ListProducts: React.FC<PropsType> = ({
    data: {loading, products, refetch},
    mutate,
}: any) => {
    if (loading) return null;
    const deleteProduct = (id: number) => {
        mutate({
            variables: {
                id,
            },
        }).then(refetch);
    };
    return (
        <Paper>
            <Table stickyHeader>
                <TableHead>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                        {['Имя', 'Год', 'Рейтинг', 'Тип'].map(element => (
                            <TableCell key={element}>{element}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(({id, name, age, rating, type}: any) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                            <TableCell key={name}>{name}</TableCell>
                            <TableCell key={age}>{age}</TableCell>
                            <TableCell key={rating}>{rating}</TableCell>
                            <TableCell key={type}>{type}</TableCell>
                            <TableCell>
                                <DeleteIcon onClick={() => deleteProduct(id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export const ListProductsQuery = compose(
    graphql(GET_PRODUCTS),
    graphql(DELETE_PRODUCT),
    // @ts-ignore
)(ListProducts);
