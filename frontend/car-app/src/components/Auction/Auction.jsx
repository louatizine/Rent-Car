import React,{useEffect} from 'react'
import './Auction.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'

// images

import car1 from '../../Assests/car1.png'


const Auction = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <div className='auction section' >
            <div className="secContainer container">
                <div className="secHeading flex" data-aos='fade-up' data-aos-duration='3000s'>
                    <h3 className="secTitle">
                        Active Auctions
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">

                    <div className="singleCar grid singleCarActive" data-aos='fade-up' data-aos-duration='3000s'>
                        <div className="imgDiv">
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

                        <div className="price_buyBtn flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='buyBtn'>
                                Buy Now
                            </span>
                        </div>
                    </div>
                    <div className="singleCar grid" data-aos='fade-up' data-aos-duration='3000s'>
                        <div className="imgDiv">
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

                        <div className="price_buyBtn flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='buyBtn'>
                                Buy Now
                            </span>
                        </div>
                    </div>
                    <div className="singleCar grid singleCarActive" data-aos='fade-up' data-aos-duration='3000s'>
                        <div className="imgDiv">
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

                        <div className="price_buyBtn flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='buyBtn'>
                                Buy Now
                            </span>
                        </div>
                    </div>
                    <div className="singleCar grid" data-aos='fade-up' data-aos-duration='3000s'>
                        <div className="imgDiv">
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

                        <div className="price_buyBtn flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='buyBtn'>
                                Buy Now
                            </span>
                        </div>
                    </div>
                    <div className="singleCar grid singleCarActive" data-aos='fade-up' data-aos-duration='3000s'>
                        <div className="imgDiv">
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

                        <div className="price_buyBtn flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='buyBtn'>
                                Buy Now
                            </span>
                        </div>
                    </div>
                    <div className="singleCar grid" data-aos='fade-up' data-aos-duration='3000s'>
                        <div className="imgDiv">
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

                        <div className="price_buyBtn flex">
                            <span className='price'>
                                $41,200
                            </span>
                            <span className='buyBtn'>
                                Buy Now
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auction