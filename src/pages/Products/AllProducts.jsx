import React, { useState } from "react";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";
import Loader from "../../components/Shared/Loader";

const AllProducts = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: getAllProduct } = useGetAllProductQuery({
    limit,
    page,
    searchTerm,
  });

  return (
    <div className=" bg-[#fef5ef] py-20">
      <div className="max-w-[1400px] w-11/12 mx-auto">
        <h1 className="text-[#ff2e59] font-semibold text-xl md:text-2xl lg:text-3xl">
          Products . . .
        </h1>
        <p className="text-orange-500 text-md lg:text-lg mt-2 mb-6">
          ------ Updated with the latest products
        </p>
        {getAllProduct?.data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {getAllProduct?.data?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-52">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
