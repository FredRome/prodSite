import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Core from './routes/Core';
import Prod from './routes/Prod';
import Hr from './routes/Hr';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prod />}  />
         <Route path="core" element={<Core />} />
         <Route path ="prod" element={<Prod />} />
          <Route path ="hr" element={<Hr />} />
          <Route path="*" element={<h1>Route does notexist</h1>}/>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
