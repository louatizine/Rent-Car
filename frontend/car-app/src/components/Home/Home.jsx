import React, { useEffect } from 'react'
import './Home.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


// PHOTOS

import homeImage from '../../Assests/homeImage.png'

const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    
    return (
        <div className='home'>
            <div className="seeContainer">
                <div data-aos='fade-up' className="homeText">
                    <span className='homeSpan'>
                        Meet your new car
                    </span>
                    <h1 className='homeTitle'>
                        Honda Civic type R
                    </h1>
                    <div className="btns flex">
                        <button data-aos='fade-right' className='btn' >More Details</button>
                        <button data-aos='fade-left' className='btn primaryBtn' >Test Drive</button>
                    </div>
                </div>

                <div data-aos='fade-down-right' className="homeImage">
                    <img src={homeImage} alt="Home Image" />
                </div>
            </div>
        </div>
    )
}

export default Home