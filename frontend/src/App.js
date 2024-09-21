import React from 'react';
import { persist, store } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './router'
import './scss/index.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <AppRouter />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
