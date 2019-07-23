import React from 'react';
import Main from './pages/main/index'

import Header from './components/Header/Header';

import './components/Header/style.scss';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
)

export default App;
