import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
       <img src={assets.logo} alt="" className="logo" />
       <ul className='navbar-menu'>
           <li className={menue==="home"?"active":""}>Home</li>
           <li className={menue==="menu"?"active":""} >Menu</li>
           <li className={menue==="mobile-app"?"active":""}>Mobile-App</li>
           <li cassName={menue==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=""/>
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar