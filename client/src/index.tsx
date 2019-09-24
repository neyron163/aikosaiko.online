import React from 'react';
import ReactDOM from 'react-dom';
import './components/styleguide/reset.css';
import {App} from './components/app';
import { ApolloProvider } from 'react-apollo';
import client from './config/apollo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
