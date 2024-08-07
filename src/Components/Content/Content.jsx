import React, { useState } from 'react';
import amazonLogo from './amazon.svg';
import FlipKartlogo from './Flipkart.svg';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './Content.css';

const shoes = [{
    id: 1,
    src: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Shoe Image 1"
},
{
    id: 2,
    src: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Shoe Image 2"
},
{
    id: 3,
    src: "https://images.pexels.com/photos/297499/pexels-photo-297499.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Shoe Image 3"
},
{
    id: 4,
    src: "https://images.pexels.com/photos/3025984/pexels-photo-3025984.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Shoe Image 4"
}]

const Content = ({ bgColor }) => {
    const [images, setImages] = useState(shoes);
    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className={`content-container ${bgColor === "black" ? "content-container-active" : "content-container-inactive"}`}>
            <div className='content-container'>
                <div>
                    <h1 className={bgColor === "black" ? "text-white" : "text-black"}>Your Feet Deserve the Best</h1>
                    <h5 className={bgColor === "black" ? "text-white" : "text-black"}>Your feet deserve the best, and we're here to help you with our shoes. I hope you guys like our shoes.</h5>
                    <a href='https://www.nike.com/in/' target='_blank'>
                        <button className='shopnow-button'>Shop Now</button>
                    </a>
                    <h5 className={bgColor === "black" ? "text-white" : "text-black"}>Also Available on</h5>
                    <div className='Logos'>
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                            <img src={amazonLogo} style={{ width: '30px' }} alt="Amazon Logo" />
                        </a>
                        <a href='https://www.flipkart.com/' target='_blank'>
                            <img src={FlipKartlogo} style={{ width: '30px' }} alt="Flipkart Logo" /></a>

                    </div>
                </div>
                <div className="image-container">
                    <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
                    {images.map((shoe, id) => (
                        <li key={id}>
                            <img src={shoe.src} alt={shoe.alt} className={currentSlide === id ? "current-image" : "current-image hide-current-image"} />
                        </li>
                    ))}
                    <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
                    <div className='circle-indicators'>
                        {images && images.length > 0 && images.map((_, index) => (
                            <button
                                key={index}
                                className={currentSlide === index ? "current-indicator" : "inactive-indicator"}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
