import React, { useState } from "react";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";

const AllProducts = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: getAllProducts } = useGetAllProductQuery({
    limit,
    page,
    searchTerm,
  });
  console.log(getAllProducts);

  return <div>Products</div>;
};

export default AllProducts;
