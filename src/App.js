import React from 'react';
import Routes from './routes'
import { BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
