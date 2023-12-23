import React, { useEffect } from "react";
import HoverEffectButton from "../../components/Shared/HoverEffectButton/HoverEffectButton";
import { Link } from "react-router-dom";
import { useCreateAddToCartMutation } from "../../redux/features/addToCart/addToCartApi";
import { useGetMyProfileQuery } from "../../redux/features/user/userApi";
import toast from "react-hot-toast";
import Modal from "../../components/Shared/Modal";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteSingleProductMutation } from "../../redux/features/product/productApi";

const ProductCard = ({ product }) => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access-token") : null;

  const headers = {
    authorization: accessToken,
  };

  const { data: getMyProfile } = useGetMyProfileQuery({ headers });
  const [createAddToCart, { isSuccess, isError }] =
    useCreateAddToCartMutation();
  const [
    deleteSingleProduct,
    { isSuccess: deleteProductIsSuccess, isError: deleteProductIsError },
  ] = useDeleteSingleProductMutation();

  const handleAddToCart = () => {
    const data = {
      productId: product?.id,
      email: getMyProfile?.data?.email,
    };
    createAddToCart({ data, headers });
  };

  const handleDeleteProduct = (data) => {
    deleteSingleProduct({ id: data?.id, headers });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully added to cart!");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (deleteProductIsSuccess) {
      toast.success("Successfully deleted product!");
    }
    if (deleteProductIsError) {
      toast.error("Something went wrong!");
    }
  }, [deleteProductIsSuccess, deleteProductIsError]);

  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden hover:shadow-lg p-6 mb-6 bg-white border-2 border-gray-200">
      <div className="font-bold text-xl mb-6 flex justify-between hover:scale-110 duration-500">
        <img
          className="h-64 mx-auto "
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#04c5ff] text-xl font-semibold">{product?.title}</p>
        {getMyProfile?.data?.role === "admin" && (
          <div>
            <Modal
              Button={
                <MdDeleteOutline
                  className={`text-2xl border-none  text-red-500 hover:text-red-60`}
                />
              }
              data={product}
              modalBody={
                <>
                  <h3 className="font-semibold text-md sm:text-lg pb-5 text-center">
                    Do you want to delete:{" "}
                    <span className="text-red-500 font-bold">
                      {product?.title}
                    </span>
                    ?
                  </h3>
                  <div className="py-4 text-center flex justify-around">
                    <button
                      onClick={() => {
                        handleDeleteProduct(product);
                        const modal = document.getElementById(product?.id);
                        if (modal) {
                          modal.close();
                        }
                      }}
                      className="btn bg-blue-700 hover:bg-blue-500 px-2 py-[2px] rounded-md btn-xs sm:btn-sm text-white"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        const modal = document.getElementById(product?.id);
                        if (modal) {
                          modal.close();
                        }
                      }}
                      className="btn bg-red-600 hover:bg-red-500 px-2 py-[2px] rounded-md btn-xs sm:btn-sm text-white"
                    >
                      No
                    </button>
                  </div>
                </>
              }
            />
          </div>
        )}
      </div>
      <div className="flex flex-row justify-between items-center py-4">
        <div>
          <p className="text-gray-900 text-lg font-semibold">Variation:</p>
          <p className="text-sm pl-4">Color: {product?.variation?.color}</p>
          <p className="text-sm pl-4">Size: {product?.variation?.size}</p>
        </div>
        <div>
          <span onClick={() => handleAddToCart()}>
            <HoverEffectButton text="Add To Cart" />
          </span>
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
