
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInSignUp from './components/SigninSignUp';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

            <Route path="/" element={<SignInSignUp />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
