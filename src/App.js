import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdimAdd from './components/AdimAdd';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<AdimAdd/>}/>

</Routes>
</BrowserRouter>
      

    </div>
  );
}

export default App;
