import React from "react";
import "./App.css";
import Card2 from "./components/Card2";
import { BrowserRouter } from "react-router-dom";
import {
  Route,
  Routes,
  Switch,
} from "react-router-dom/dist/umd/react-router-dom.development";
import SigninSignUp from "./components/SigninSignUp";
import AdimAdd from "./components/AdimAdd";
import DeleteMovie from "./components/DeleteMovie";
import ViewBookings from "./components/ViewBookings";
import Intro from "./components/Intro";
import SingleMovie from "./components/SingleMovie";
import AcceptUser from "./components/AcceptUser";
import MovieGenres from "./components/Moviegenres";
import Aboutus from "./components/Aboutus";
import TicketBooking from "./components/TicketBooking";
import UserProfile from "./components/UserProfile";
import ViewmyBookings from "./components/ViewmyBookings";
import Error from "./components/Error";
import { Admin } from "./utils/Admin";
import { User } from "./utils/User";
import { LogIn } from "./utils/LogIn";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Card2 />
                <MovieGenres />
                <Aboutus />
              </>
            }
          />
          <Route path="*" element={<Error />} />

          <Route element={<LogIn />}>
            <Route path="/signin" element={<SigninSignUp />} exact />
          </Route>

          <Route path="/smovie" element={<SingleMovie />} />

          <Route element={<Admin />}>
            <Route path="/deletemovie" element={<DeleteMovie />} exact />
            <Route path="/viewbooking" element={<ViewBookings />} exact />
            <Route path="/acceptuser" element={<AcceptUser />} exact />
            <Route path="/moviebooking" element={<AdimAdd />} exact />
          </Route>

          <Route element={<User />}>
            <Route path="/ticketbooking" element={<TicketBooking />} exact />
            <Route path="/userprofile" element={<UserProfile />} exact />
            <Route path="/viewmytickets" element={<ViewmyBookings />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
