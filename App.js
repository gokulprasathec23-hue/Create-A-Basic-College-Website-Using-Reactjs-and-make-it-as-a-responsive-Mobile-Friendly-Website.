import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Visson from './Component/Visson';
import Head from './Component/Head';
import Department from './Component/Department';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rule from './Component/Rule';
import Agri from './Depart/Agri';
import Aero from './Depart/Aero';
import BioTech from './Depart/BioTech';
import BioMedical from './Depart/BioMedical';
function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/visson' element={<Visson/>}/>
      <Route path='/head' element={<Head/>}/>
      <Route path='/department' element={<Department/>}/>
      <Route path='/rule' element={<Rule/>}/>
      <Route path='/agri' element={<Agri/>}/>
      <Route path='/aero' element={<Aero/>}/>
      <Route path='/biotech' element={<BioTech/>}/>
      <Route path='/biomedical' element={<BioMedical/>}/>
     </Routes>
     
     </BrowserRouter>
  );
}
export default App;
