import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Mynews from './components/Mynews/Mynews';
import Mynews1 from './components/Mynews1/Mynews1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
    <Route path='/Header' element={<Header/>} />
    <Route path='/Main' element={<Main/>} />
    <Route path='/Footer' element={<Footer/>} />
    <Route path='/Mynews' element={<Mynews/>} />
    <Route path='/Mynews1' element={<Mynews1/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
