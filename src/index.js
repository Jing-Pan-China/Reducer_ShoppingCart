

import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux'
import App from './App'
import cartReducer from './reducer/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
