import React from "react";
import AllProducts from "../Products/AllProducts";
import FeaturedSection from "../../components/UI/FeaturedSection";

const Home = () => {
  return (
    <div>
      <FeaturedSection />
      <AllProducts />
    </div>
  );
};

export default Home;
