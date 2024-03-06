import React from 'react';

import Card2 from './components/Card2';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import MovieGenres from './components/Moviegenres';
import Aboutus from './components/Aboutus';


const App = () => {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<><Intro/><MovieGenres/><Aboutus/><Card2/></>}/>

 
  </Routes>
  </BrowserRouter>
</div>
  );
};

export default App;
