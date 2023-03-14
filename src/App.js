//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import FavList from './components/FavList';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> Home </Route>
        <Route path="/FavList" element={<FavList/>}> FavList </Route>
      </Routes>
    </>
  );
}

export default App;
