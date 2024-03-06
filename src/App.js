import React from "react";
import "./App.css";
import Card2 from './components/Card2';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import SigninSignUp from './components/SigninSignUp';
import AdimAdd from './components/AdimAdd';
import DeleteMovie from './components/DeleteMovie';
import ViewBookings from './components/ViewBookings';
import Intro from './components/Intro';
import SingleMovie from './components/SingleMovie';
import AcceptUser from "./components/AcceptUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Intro/><Card2/></>}/>
          <Route path="/signin" element={<SigninSignUp />} />
          <Route path="/moviebooking" element={<AdimAdd />} />
          <Route path="/deletemovie" element={<DeleteMovie />} />
          <Route path="/viewbooking" element={<ViewBookings />} />
          <Route path="/acceptuser" element={<AcceptUser />} />
          <Route path="/smovie" element={<SingleMovie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
