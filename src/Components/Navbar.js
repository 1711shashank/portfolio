import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import "./Navbar.css"


const Navbar = () => {
	const [Mobile, setMobile] = useState(false)
	return (
		<>
			<nav className='navbar'>
				<img className='navbar-avatar' src="https://www.varunvishal.dev/static/media/avatar2.d5af6df4.png"/>
				<div className={Mobile ? "navbar-mobile" : "navbar-links"} onClick={() => setMobile(false)}>
					<a href='#About'> About</a>
 					<a href='#Services'> Services</a>
 					<a href='#Projects'> Projects</a>
 					<a href='#Skills'> Skills</a>
 					<a href='#Contact'> Contact</a>
					{/* <p> About</p>
 					<p> Services</p>
 					<p> Projects</p>
 					<p> Skills</p>
 					<p> Contact</p> */}
				</div>
				<button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
					{Mobile ? <CloseIcon /> : <DensityMediumIcon />}
				</button>
			</nav>
		</>
	)
}
export default Navbar;
