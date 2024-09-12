import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


import  ThemeContext  from "./context/ThemeContext"; 
import { Provider } from 'react-redux';
import { store } from './features/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>

<BrowserRouter>
  <ThemeContext>
    <App />
  </ThemeContext>
</BrowserRouter>
</Provider>
  </I18nextProvider>
  
  </>
);


