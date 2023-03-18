//import logo from './logo.svg';
import './App.css';
import Navbbar from './components/Navbar';
import Home from './components/Home';
import FavList from './components/FavList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbbar />
      <Routes>
        <Route path="/" element={<Home />}> Home </Route>
        <Route path="/FavList" element={<FavList />}> FavList </Route>
      </Routes>
    </>
  );
}

export default App;
