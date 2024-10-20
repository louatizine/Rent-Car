import React from 'react'
import './Sellers.css'

// images
import logoOne from '../../Assests/logoOne.png'
import logoTwo from '../../Assests/logoTwo.png'
import logoThree from '../../Assests/logoThree.png'
import logoFour from '../../Assests/logoFour.png'

const Sellers = () => {
    return (
        <div className='sellers section'>
            <div className="secContainer container">
                <div className="seeHeading grid">
                    <h3 className="secTitle">
                        Explore top sellers in town
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio atque ipsum voluptatem ea, quo harum!</p>
                </div>

                <div className="sellersContainer grid">
                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={logoOne} alt="" className='img' />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Toyota
                            </h4>
                            <p>From $40K</p>
                        </span>
                    </div>

                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={logoTwo} alt="" className='img' />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Mercedes-Benz
                            </h4>
                            <p>From $60K</p>
                        </span>
                    </div>

                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={logoThree} alt="" className='img' />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Volkswagen
                            </h4>
                            <p>From $35k</p>
                        </span>
                    </div>

                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={logoFour} alt="" className='img' />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Hyundai
                            </h4>
                            <p>From $23k</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sellers