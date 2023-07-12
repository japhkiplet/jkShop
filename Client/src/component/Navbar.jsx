import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import profile from '../assets/profile.png';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const name = useSelector((state) => state.user.user?.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('logging out');
    logOutUser(dispatch);
    navigate('/')
    
};

  return (
    <div className="navbar-container">
      <div className="blog_logo">
        <img src={logo} alt="no pic" />
      </div>
      
      <div className='blog'>
        <Link to='/home'>Home</Link>
        <Link to='/pricing'>Products</Link>
        <Link to='/about'>About </Link>
      </div>
      <div className="cart">
      <Link to="/cart" >
          <div className='shopping-cart'>
            <h1><AiOutlineShoppingCart /><span className="counter">0</span></h1>
          </div>
        </Link>
         
        {
          name && <div className="navbar-right">
            <img src={profile} alt="profileImage" className='profileImage'  />
               <p className="navbarName">{name}</p>
              <Link onClick={handleLogout} style={{ color: "red" }}> Logout</Link>
          </div>         
        }
      </div>
    </div>
  )
}

export default Navbar