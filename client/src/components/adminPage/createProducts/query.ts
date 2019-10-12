import gql from 'graphql-tag';

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

export const UPLOAD_FILE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;