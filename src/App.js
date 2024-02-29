import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdimAdd from './components/AdimAdd';
import DeleteMovie from './components/DeleteMovie';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<AdimAdd/>}/>
<Route path='/delete' element={<DeleteMovie/>}/>
</Routes>
</BrowserRouter>
      

    </div>
  );
}

export default App;
