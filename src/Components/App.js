import React from 'react';

import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import Navbar from './Navbar/Navbar';

import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Navbar className="navar"/>
      <Content >
        {/* Components */}
        {props.children}
      </Content>
      <Footer />
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
