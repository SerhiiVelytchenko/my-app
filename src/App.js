import React from 'react';
import './App.css';
import Header from './components/1_header/index';
import Wrapper from './components/2_wrapper/Index/index'
import Footer from './components/3_footer/index';

function App() {
  return (

    <div className="App">

            <Header/>
            <div className="Nav">
            <Wrapper/>
            </div>
            <Footer/>

    </div>
  );
}

export default App;
