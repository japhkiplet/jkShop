import prada from '../assets/prada.webp'
import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
        <div  className='home-banner'>
            <div className='home-description'>
                <h1>WELCOME TO  <span>JK-SHOES</span></h1>
                <h1>ALL YOU NEED IS NICE SHOES</h1>
                <p>LETS SHOWCASE OUR STYLES IN THE SHOE GAME😍</p>
                <Link to= "/pricing">
                  <button>Explore our shop</button>
                </Link>
            </div>
            <div className='prada'>
                <img src={prada} alt="no pic" />
            </div>
        </div>
        
    </div>
  )
}

export default Home