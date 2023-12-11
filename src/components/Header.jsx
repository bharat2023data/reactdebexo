import React from 'react';
import '../navbar/w3.css';
// import drdo from "../images/drdo.png";
// import burger from '../navbar/burger7.png';
import Navbar from '../Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import Speakers from "./pages/speakers";
import Exhibitors from "./pages/exhibitors";
import Registration from "./pages/registration";
import Blogs from "./pages/blogs";
import SignUp from "./pages/sign-up";

function Header(){


    return(
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
				{/* <Route path="/" element={<Home/>}/> */}
				<Route path="/speakers" element={<Speakers/>}/>
				<Route path="/exhibitors" element={<Exhibitors/>}/>
				<Route path="/registration" element={<Registration/>}/>
				<Route path="/about" element={<About/>}/>
				{/* <Route path="/sign-up" element={<SignUp/>}/> */}
        </Routes>
      </Router>
    );
}
export default Header;