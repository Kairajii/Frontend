import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>} />
      <Route path='/edit' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
