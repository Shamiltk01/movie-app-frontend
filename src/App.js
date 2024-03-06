
import React from 'react';


import './App.css';

import SignInSignUp from './components/SigninSignUp';

import AdimAdd from './components/AdimAdd';
import DeleteMovie from './components/DeleteMovie';
import ViewBookings from './components/ViewBookings';


import Card2 from './components/Card2';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';

import Intro from './components/Intro';


const App = () => {
  return (
<div>

      <BrowserRouter>
        <Routes>

            <Route path="/" element={<><Intro/><Card2/></>}/>
            <Route path="/moviebooking" element={<AdimAdd/>}/>
            <Route path="/deletemovie" element={<DeleteMovie/>}/>
            <Route path="/viewbooking" element={<ViewBookings/>}/>

        </Routes>
      </BrowserRouter>

</div>
  );
};

export default App;
