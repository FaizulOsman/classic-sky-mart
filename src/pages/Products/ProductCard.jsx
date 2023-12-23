import React from "react";
import HoverEffectButton from "../../components/Shared/HoverEffectButton/HoverEffectButton";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden hover:shadow-lg p-6 mb-6 bg-white border-2 border-gray-200">
      <div className="font-bold text-xl mb-6 flex justify-between hover:scale-110 duration-500">
        <img
          className="h-64 mx-auto "
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <p className="text-[#04c5ff] text-xl font-semibold">{product?.title}</p>
      <div className="flex flex-row justify-between items-center py-4">
        <div>
          <p className="text-gray-900 text-lg font-semibold">Variation:</p>
          <p className="text-sm pl-4">Color: {product?.variation?.color}</p>
          <p className="text-sm pl-4">Size: {product?.variation?.size}</p>
        </div>
        <div>
          <HoverEffectButton text="Add To Cart" />
        </div>
      </div>
      <Link to={`/products/${product?.id}`}>
        <button className="bg-orange-500 hover:bg-white text-white hover:text-orange-500 hover:border hover:border-orange-500 font-bold py-2 px-4 rounded w-full">
          Quick View
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
