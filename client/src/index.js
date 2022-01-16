import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import CartProvider from './providers/cart/cart.provider';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import {crwnStore, persistor} from './redux/store'

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
        <Provider store={crwnStore}>
          <BrowserRouter>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </BrowserRouter>
        </Provider>
      </CartProvider>
    </ApolloProvider>      
  </React.StrictMode>,
  document.getElementById('root')
);