import React from 'react';

import Header from './components/header';
import Memosheet from './components/memosheets';

import './style/style.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <hr className="line" />
      <Memosheet />
      
    </div>
  );
}

export default App;
