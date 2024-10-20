import React,{useEffect} from 'react'
import './Trending.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

// icons

import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'

// images

import car1 from '../../Assests/car1.png'

const Trending = () => {

        useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='trending section' >
            <div className="secContainer container">
                <div className="secHeading flex" data-aos='fade-up'>
                    <h3 className="secTitle" >
                        Trending Near You
                    </h3>

                    <div className="navBtns flex" >
                        <BsArrowLeftShort data-aos='fade-right' className='icon leftIcon' />
                        <BsArrowRightShort data-aos='fade-left' className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">

                    <div className="singleCar grid" data-aos='fade-right' data-aos-duration='3000s'>
                        <div className="imgDiv" >
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className='carTitle'>
                            Used 2019 Audi 54 Premium Plus
                        </h5>
                        <span className='miles'>
                            11457 Miles
                        </span>
                        <span className='AWD'>
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_seller flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='seller'>
                                Best Seller
                            </span>
                        </div>
                    </div>

                    <div className="singleCar grid" data-aos='fade-right' data-aos-duration='3000'>
                        <div className="imgDiv" >
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className='carTitle'>
                            Used 2019 Audi 54 Premium Plus
                        </h5>
                        <span className='miles'>
                            11457 Miles
                        </span>
                        <span className='AWD'>
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_seller flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='seller'>
                                Best Seller
                            </span>
                        </div>
                    </div>

                    <div className="singleCar grid" data-aos='fade-right' data-aos-duration='3000'>
                        <div className="imgDiv" >
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className='carTitle'>
                            Used 2019 Audi 54 Premium Plus
                        </h5>
                        <span className='miles'>
                            11457 Miles
                        </span>
                        <span className='AWD'>
                            AWD 4-Cylinder Turbo
                        </span>

                        <div className="price_seller flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='seller'>
                                Best Seller
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Trending