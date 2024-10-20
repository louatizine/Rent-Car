import React,{useEffect} from 'react'
import './Review.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
// images

import car1 from '../../Assests/review1.jpg'
import user1 from '../../Assests/user1.png'
import car2 from '../../Assests/review2.jpg'
import user2 from '../../Assests/user2.png'
import car3 from '../../Assests/review3.png'
import user3 from '../../Assests/user3.png'

// Import Icon
import { BsArrowRightShort } from 'react-icons/bs'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const Review = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <div className='review section' data-aos='fade-up' data-aos-duration='3000s'>
            <div className="secContainer container">

                <div className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon rightIcon" />
                    </div>
                </div>

                <div className="reviewContainer grid">
                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>

                        <h5 className="reviewTitle">
                            2023 Cadialiac
                        </h5>
                        <span className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quas ad quisquam praesentium, mollitia enim.
                        </span>
                        <div className="reviewDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user1} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jackline Nelson
                                    </span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={car2} alt="Car Image" />
                        </div>

                        <h5 className="reviewTitle">
                            2023 Cadialiac
                        </h5>
                        <span className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quas ad quisquam praesentium, mollitia enim.
                        </span>
                        <div className="reviewDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user2} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jackline Nelson
                                    </span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={car3} alt="Car Image" />
                        </div>

                        <h5 className="reviewTitle">
                            2023 Cadialiac
                        </h5>
                        <span className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa quas ad quisquam praesentium, mollitia enim.
                        </span>
                        <div className="reviewDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user3} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jackline Nelson
                                    </span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review