import './slider.css'
import {MdOutlineWest , MdOutlineEast} from 'react-icons/md'
import { useState } from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=1024x1024&w=is&k=20&c=anQJwG2c4-ZEqf9BgeIm3ph76JZWSU2-GbOE7b_OzcA=",
        "https://media.istockphoto.com/id/1425880214/photo/leather-mens-shoe-on-white-background.jpg?s=1024x1024&w=is&k=20&c=A181QXjB5X_Ny2ARjWO7QU6Q4Y1TxInrVX9WbodzBqE=",
        "https://media.istockphoto.com/id/1397720464/photo/casual-leather-boots-and-shoes-for-men-on-a-wooden-shelf-in-a-retail-store.jpg?s=1024x1024&w=is&k=20&c=Mosjuz_FhVMCP0S2gO-oF8xkytxUhf83gMUT05aCfXM=",
        "https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=1024x1024&w=is&k=20&c=I7--KKDMWMPX0yQsaVUTr5S7jBPH9RcM8owFkL6G00E=",
        "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
        "https://media.istockphoto.com/id/1148822167/photo/close-up-shot-of-runners-shoes.jpg?s=612x612&w=0&k=20&c=jBfVGW1Ot-FXdA2AQ2eXVrKYcf3BsLGbkYYnRi2K_TE="
    ];
    const prevSlide = () =>{
        setCurrentSlide(currentSlide=== 0 ?3 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (next => next + 1));
    }
  return (
    <div className='slider'>
        <div className="slider-container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
            <img src={data[5]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <MdOutlineWest />
            </div>
            <div className="icon" onClick={nextSlide}>
                <MdOutlineEast />
            </div>
        </div>
    </div>
  )
}

export default Slider