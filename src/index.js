import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards, {Header} from './Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <br />
    <Header />
    <Cards />
  </React.StrictMode>
);

reportWebVitals();