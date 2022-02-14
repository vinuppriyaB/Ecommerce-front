import React from 'react'
import Navbar from "../component/Navbar";
import Announcement from '../component/Announcement';
import Slider from '../component/Slider';
import Category from '../component/Category';
import Products from '../component/Products';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div>
        <Announcement/>
            <Navbar/>
            <Slider/>
            <Category/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
