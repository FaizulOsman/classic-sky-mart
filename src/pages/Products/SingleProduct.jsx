import React from "react";
import HoverEffectButton from "../../components/Shared/HoverEffectButton/HoverEffectButton";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden hover:shadow-lg p-6 mb-6 bg-white border-2 border-gray-200">
        <div className="font-bold text-xl mb-6 flex justify-between hover:scale-110 duration-500">
          <img
            className="h-64 mx-auto "
            src="https://i.ibb.co/drv8fjW/apple-2.png"
            alt="img"
          />
        </div>
        <p className="text-[#04c5ff] text-xl font-semibold">{product?.title}</p>
        <div className="flex flex-row justify-between py-4">
          <p className="text-gray-900 text-xl mb-2">$500</p>
          <HoverEffectButton text="Add To Cart" />
        </div>
        <Link to={`/products/${product?.id}`}>
          <button className="bg-orange-500 hover:bg-white text-white hover:text-orange-500 hover:border hover:border-orange-500 font-bold py-2 px-4 rounded w-full">
            Quick View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
