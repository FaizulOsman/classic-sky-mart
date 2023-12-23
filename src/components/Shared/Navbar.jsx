import React, { useEffect, useState } from "react";
import TeamLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { useGetMyProfileQuery } from "../../redux/features/user/userApi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGetAllAddToCartQuery } from "../../redux/features/addToCart/addToCartApi";

const Navbar = () => {
  const [myProfile, setMyProfile] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access-token") : null;

  const headers = {
    authorization: accessToken,
  };

  const { data: getMyProfile } = useGetMyProfileQuery({ headers });
  const { data: getAllAddToCart } = useGetAllAddToCartQuery({ headers });

  const handleSignOut = () => {
    localStorage.removeItem("user-info");
    localStorage.removeItem("access-token");
    toast.success("Successfully Signed Out!");
    setMyProfile({});
  };

  useEffect(() => {
    setMyProfile(getMyProfile?.data);
  }, [getMyProfile?.data]);

  return (
    <nav className="bg-orange-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative py-3">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <GiHamburgerMenu className="text-white" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  className="w-8 h-8 rounded-full"
                  src={TeamLogo}
                  alt="Your Company"
                />
              </Link>
            </div>
            {
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-3">
                  <Link
                    to="/"
                    className="flex gap-2 items-center  text-white hover:text-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    <IoHomeOutline /> Home
                  </Link>
                  <Link
                    to="/products"
                    className="flex gap-2 items-center  text-white hover:text-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    <FaCartFlatbedSuitcase /> Products
                  </Link>
                  <Link
                    to="/dashboard/cart"
                    className="relative flex items-center text-white rounded-md px-3 py-2 "
                  >
                    <FaCartPlus className="w-5 h-5" />
                    <span className="absolute top-0 right-0 bg-orange-700 text-xs text-white w-5 h-5 rounded-full flex justify-center items-center">
                      {getAllAddToCart?.data?.length}
                    </span>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center">
                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button">
                          <span className="rounded-md shadow-sm">
                            <button
                              className="transition duration-150 ease-in-out"
                              type="button"
                              aria-haspopup="true"
                              aria-expanded="true"
                              aria-controls="headlessui-menu-items-117"
                            >
                              <GiHamburgerMenu className="text-white" />
                            </button>
                          </span>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <div className="px-4 py-3 text-orange-500">
                            {myProfile?.email ? (
                              <>
                                <p className="text-sm leading-5">
                                  Signed in as
                                </p>
                                <p className="text-sm font-medium leading-5truncate">
                                  {myProfile?.email}
                                </p>
                              </>
                            ) : (
                              <p className="text-sm leading-5">Not signed in</p>
                            )}
                          </div>
                          <div className="py-1">
                            <Link
                              to="/"
                              className="px-4 py-2 hover:bg-gray-200 flex justify-between w-full"
                            >
                              Home
                            </Link>
                            <Link
                              to="/products"
                              className="px-4 py-2 hover:bg-gray-200 flex justify-between w-full"
                            >
                              Products
                            </Link>
                          </div>
                          <div className="py-1 text-orange-500">
                            {myProfile?.email ? (
                              <Link
                                to="#"
                                onClick={() => handleSignOut()}
                                className="px-4 py-2 hover:bg-gray-200 flex justify-between w-full"
                              >
                                Logout
                              </Link>
                            ) : (
                              <Link
                                to="/login"
                                className="px-4 py-2 hover:bg-gray-200 flex justify-between w-full"
                              >
                                Login
                              </Link>
                            )}
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      {showDropdown && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="px-4 py-3 text-gray-700">
              {myProfile?.email ? (
                <>
                  <p className="text-sm leading-5">Signed in as</p>
                  <p className="text-sm font-medium leading-5 truncate">
                    {myProfile?.email}
                  </p>
                </>
              ) : (
                <p className="text-sm leading-5">Not signed in</p>
              )}
            </div>
            <Link
              to="/"
              className="flex gap-2 items-center hover:bg-orange-400 text-white hover:text-white rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <IoHomeOutline /> Home
            </Link>
            <Link
              to="/products"
              className="flex gap-2 items-center hover:bg-orange-400 text-white hover:text-white rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <FaCartFlatbedSuitcase /> Products
            </Link>
            <Link
              to="/dashboard/products/create-product"
              className="flex gap-2 items-center text-white hover:bg-orange-400 hover:text-white rounded-md px-3 py-2 text-base font-medium"
            >
              <FaCartPlus /> Create Product
            </Link>
            <div>
              {myProfile?.email ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => handleSignOut()}
                    className="flex gap-2 items-center text-gray-700 hover:bg-orange-400 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex gap-2 items-center text-orange-400 hover:bg-orange-400 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
