import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './layouts/HomePage';
// import { NavBar} from './components';
// import Home from './pages/Home';
function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
