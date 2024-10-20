import React,{useEffect} from 'react'
import './Footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <div className='footer' data-aos='fade-up' data-aos-duration='3000s' style={{cursor : 'pointer'}}>
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">

                    <div className="singlegrid">
                        <span className="footerTitle">
                            About
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                How it works
                            </li>
                            <li className="footerLi">
                                Careers
                            </li>
                            <li className="footerLi">
                                Affiliaters
                            </li>
                            <li className="footerLi">
                                Media
                            </li>
                        </ul>
                    </div>

                    <div className="singlegrid">
                        <span className="footerTitle">
                            Become Seller
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Add Vehicle
                            </li>
                            <li className="footerLi">
                                Resource Center
                            </li>
                            <li className="footerLi">
                                Bonds
                            </li>
                            <li className="footerLi">
                                Release Dates
                            </li>
                        </ul>
                    </div>

                    <div className="singlegrid">
                        <span className="footerTitle">
                            Community
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Recommendations
                            </li>
                            <li className="footerLi">
                                Gift Cards
                            </li>
                            <li className="footerLi">
                                Top Ups
                            </li>
                            <li className="footerLi">
                                Sellings
                            </li>
                        </ul>
                    </div>
                    
                    <div className="singlegrid">
                        <span className="footerTitle">
                            Bookings Support
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Updates For Covid-19
                            </li>
                            <li className="footerLi">
                                Help Center
                            </li>
                            <li className="footerLi">
                                Garages
                            </li>
                            <li className="footerLi">
                                Trust and Safety
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="lowerSection grid">
                    <p>2023 all right reserved</p>
                    <blockquote>ABC Company</blockquote>
                </div>
            </div>
        </div>
    )
}

export default Footer