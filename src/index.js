import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'antd/dist/reset.css'; 
import './index.css';           
import App from './App';
import { CompareProvider } from './context/CompareContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <CompareProvider>
      <App />
    </CompareProvider>
  </React.StrictMode>
);
