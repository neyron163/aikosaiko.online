import React from 'react';
// @ts-ignore
import { Admin, Resource, ListGuesser } from 'react-admin';
// @ts-ignore
import jsonServerProvider from 'ra-data-json-server';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from './dashboard/dashboard';

const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

console.log(dataProvider)
export const App = () => (
    <Admin theme={theme} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
    </Admin>
);