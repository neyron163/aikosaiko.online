import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const data = gql`
  query data {
    helloWorld
  }
`;

export const App: React.FC = () => (
    <Query query={data}>
      {({ loading, data }: any) => {
        if (loading) return <div>...</div>
        return (
          <div>{data.helloWorld}</div>
        )
      }
      }
    </Query>
);