import React from 'react';
import Route from './pages/Route';	

import "./assets/css/style.css";
//import "./assets/css/skin/skin-1.css";
import "swiper/css";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    
		  <Route />
      <ToastContainer/>
    </>
  );
}

export default App;
