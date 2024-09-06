import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


import  ThemeContext  from "./context/ThemeContext"; 
import { Provider } from 'react-redux';
import { store } from './features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Provider store={store}>

    <BrowserRouter>
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
   </Provider>
  </>
);


