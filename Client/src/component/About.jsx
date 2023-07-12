import './about.css';
import back from '../assets/back.png';

const About = () => {
  return (
    <div className='about-container'>
        <div className="about">
          <div className="about-inputs">
              <p>GET A TASTE OF OUR SIGNATURE  </p>
              <div className="about-inputs-control">
                <h2>CLASSIC SOURCED FASHION</h2>
                <p>All products are classical sourced and are monitored to maintain high quality of our products</p>
              </div>
              <div className="about-inputs-control">
                <h2>MESMERIZING TASTE & AROMA</h2>
                <p>We believe in a taste of our signature when you put on. This is used to describe the similarity of our signature .</p>
              </div>
              <div className="about-inputs-control">
                <h2>PRICES FOR EVERYONE</h2>
                <p>We believe in affordability, our hot fashions and snikers are carefully priced to not break the bank</p>
              </div>
          </div>
        </div>
        <div className='image3'>
          <img src={back} alt="Image" />
          <p>We operate 24hrs </p>
          <p>CALL : +2540105220714</p>
          <p>location : Nairobi, KENYA</p>
          <p>store : RX34527 WEST</p>
          
        </div>
    </div>
  )
}

export default About