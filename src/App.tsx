import React from 'react';

import Header from './components/header';
import Memosheet from './components/memosheets';
import Footer from './components/footer'

import './style/style.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <hr className="line" />
      <Memosheet />
      <Footer />      
    </div>
  );
}

export default App;
