import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdimAdd from './components/AdimAdd';
import DeleteMovie from './components/DeleteMovie';
import ViewBookings from './components/ViewBookings';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<AdimAdd/>}/>
<Route path='/delete' element={<DeleteMovie/>}/>
<Route path='/view' element={<ViewBookings/>}/>
</Routes>
</BrowserRouter>
      

    </div>
  );
}

export default App;
