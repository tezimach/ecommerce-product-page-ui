import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import header from './components/header/header.js';
import mainMenu from './components/mainMenu/MainMenu.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <>
    <div className='header'>
      {header()}
    </div>
    {}
   </>
  </React.StrictMode>
);


