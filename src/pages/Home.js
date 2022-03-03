import React from "react";
import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";
import Slider from "../component/Slider";
import Category from "../component/Category";
import Products from "../component/Products";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />

      <Category />
      <Products />

      <Footer />
    </div>
  );
};

export default Home;
