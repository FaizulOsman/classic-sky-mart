import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useCreateProductMutation } from "../../redux/features/product/productApi";

const CreateProduct = () => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access-token") : null;

  const headers = {
    authorization: accessToken,
  };

  const [createProduct, { isSuccess, isError, error }] =
    useCreateProductMutation();

  const handleCreateNewProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const color = e.target.color.value;
    const size = e.target.size.value;

    const data = {
      title,
      image,
      variation: {
        color,
        size,
      },
    };

    createProduct({ data, headers });

    e.target.title.value = "";
    e.target.image.value = "";
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product created successfully!");
    }
    if (isError) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  }, [isSuccess, isError, error]);

  return (
    <div className="pb-20 pt-10">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-5 border rounded-lg border-[#ff2e59] p-5">
        <h3 className="text-[#ff2e59] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-5">
          Create Product
        </h3>
        <form
          onSubmit={(e) => handleCreateNewProduct(e)}
          className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-6 mt-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="bg-transparent shadow appearance-none border border-orange-500 rounded max-w-4xl py-1 sm:py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            className="bg-transparent shadow appearance-none border border-orange-500 rounded max-w-4xl py-1 sm:py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <select
            name="color"
            className="select select-bordered border border-orange-500 rounded px-3 font-normal select-sm sm:select-md"
          >
            <option value="black">Color</option>
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="lightgray">Lightgray</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="orange">Orange</option>
          </select>
          <select
            name="size"
            className="select select-bordered border border-orange-500 rounded px-3 font-normal select-sm sm:select-md"
          >
            <option value="S">Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <button className="bg-orange-500 hover:bg-white text-white hover:text-orange-500 hover:border hover:border-orange-500 font-bold py-2 px-4 rounded w-full">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
