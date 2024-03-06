
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignInSignUp from './components/SigninSignUp';
import AdimAdd from './components/AdimAdd';
import DeleteMovie from './components/DeleteMovie';
import ViewBookings from './components/ViewBookings';


function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>

            <Route path="/" element={<SignInSignUp />}/>
            <Route path="/adminadd" element={<AdimAdd />}/>
            <Route path="/delete" element={<DeleteMovie />}/>
            <Route path="/viewbooking" element={<ViewBookings />}/>




        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
