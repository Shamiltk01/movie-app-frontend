import React from "react";

import "./App.css";

import SignInSignUp from "./components/SigninSignUp";

import AdimAdd from "./components/AdimAdd";
import DeleteMovie from "./components/DeleteMovie";
import ViewBookings from "./components/ViewBookings";

import Card2 from "./components/Card2";
import { BrowserRouter } from "react-router-dom";
import {
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";

import Intro from "./components/Intro";
import AcceptUser from "./components/AcceptUser";
import SigninSignUp from "./components/SigninSignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Card2 />
              </>
            }
          />

            {/* other routes */}
            <Route path="/signin" element={<SigninSignUp />} />
          <Route path="/moviebooking" element={<AdimAdd />} />
          <Route path="/deletemovie" element={<DeleteMovie />} />
          <Route path="/viewbooking" element={<ViewBookings />} />
          <Route path="/acceptuser" element={<AcceptUser />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
