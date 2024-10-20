import React,{useEffect} from 'react'
import './Search.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

// icons
import { AiOutlineSearch } from "react-icons/ai";


const Search = () => {
    useEffect(() => {
        Aos.init({
            duration : 2000,
        })
    }, [])
    return (
        <div className='search'>
            <div className="secContainer container" data-aos='fade-up'>
                <h3 className="title">
                    Which vehicle you are looking for?
                </h3>

                <div className="searchDiv grid">
                    <input type="text" placeholder="type" />
                    <input type="number" placeholder="Year" />
                    <input type="text" placeholder="Model" />
                    <input type="number" placeholder="Price" />
                    <button className='btn primaryBtn flex'>
                        <AiOutlineSearch className='icon' />
                        <span>
                            Search
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search