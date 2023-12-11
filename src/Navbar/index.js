// components/Navbar/index.js
import drdo from "../images/drdo.png";

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/" >
						<img src={drdo} alt="" style={{height:"50px"}} ></img>
					</NavLink>
					<NavLink to="/" >
						Home
					</NavLink>
					<NavLink to="/speakers" activeStyle>
						Speakers
					</NavLink>
					<NavLink to="/exhibitors" activeStyle>
						Exhibitor
					</NavLink>
					<NavLink to="/registration" activeStyle>
						Registration
					</NavLink>
					<NavLink to="/about" activeStyle>
						About Us
					</NavLink>
					{/* <NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
					Second Nav
					<NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;
