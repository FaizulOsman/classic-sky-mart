import React from "react";

const FeaturedSection = () => {
  return (
    <div>
      <div className="mx-auto my-14 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-[#ff2e59] rounded-md bg-[#fef5ef]">
            <div
              style={{
                backgroundImage: "url(https://i.ibb.co/VWsSBnj/tshirt-2.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
              }}
              className="bg-[#fef5ef] p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">Best New</h2>
              <h2 className="text-orange-500 text-2xl font-bold mb-4">
                Men's Urban Long T-shirt
              </h2>
              <button className="btn_regular bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <div className="border border-gray-400 rounded-md bg-[#fef5ef]">
            <div
              style={{
                backgroundImage: "url(https://i.ibb.co/bPdKT2W/tshirt-4.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
              }}
              className="bg-gray-200 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">Best New</h2>
              <h2 className="text-orange-500 text-2xl font-bold mb-4">
                Fabrilife mens premium T-shirt
              </h2>
              <button className="btn_regular bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <div className="border border-[#ff2e59] rounded-md bg-[#fef5ef]">
            <div
              style={{
                backgroundImage: "url(https://i.ibb.co/WHRC2T7/tshirt-3.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
              }}
              className="bg-[#fef5ef] p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">Best New</h2>
              <h2 className="text-orange-500 text-2xl font-bold mb-4">
                Men's Long Sleeve T-shirt
              </h2>
              <button className="btn_regular bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
