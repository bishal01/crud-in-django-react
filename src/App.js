import React from 'react';
import './App.css';
import Showproducts from './components/Showproducts';
import Navbar from './components/Navbar'
import {
  BrowserRouter ,
  Route
 
} from "react-router-dom";
import Update from './components/Update';
import Add from './components/Add';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
 
  
  <Navbar/>
 
  < Route path='/' exact component={Showproducts} />
  < Route path='/add' exact component={Add} />
  < Route path='/detail/:id' exact component={Detail} />
  < Route path='/update/:id' exact component={Update} />

    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
