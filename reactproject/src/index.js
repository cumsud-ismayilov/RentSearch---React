import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/style/global.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
);

