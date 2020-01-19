import React from 'react';

import Header from './components/header';
import Memosheet from './components/memosheets';
import Memomodal from './components/memo-modal'

import './style/style.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <hr className="line" />
      <Memosheet />
      <Memomodal title="test" description="asd" background="#fff"/>
    </div>
  );
}

export default App;
