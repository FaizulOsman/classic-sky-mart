import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Loader from "./Loader";

const Table = ({
  tableTitle,
  page,
  setPage,
  limit,
  setLimit,
  meta,
  allData,
  setSortOrder,
  tableHeadData,
  tableBodyData,
}) => {
  const totalPage = Math.ceil(parseInt(meta?.total) / parseInt(meta?.limit));

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setPage(newPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex overflow-hidden text-sm">
        <div className="flex-grow overflow-hidden h-full flex flex-col">
          <div className="flex-grow flex overflow-x-hidden">
            <div className="flex-grow overflow-y-auto">
              <div className="sm:py-7 py-4">
                <div className="flex w-full items-center mb-7">
                  <div className="flex items-center text-lg sm:text-2xl z-40 text-orange-500 font-semibold border-l-4 border-orange-500 pl-2">
                    {tableTitle}
                  </div>
                  <div className="ml-auto text-xs inline-flex items-center">
                    <span className="mr-3">Limit {limit}</span>
                    <button
                      onClick={() => setLimit(limit - 1)}
                      className={`mr-3 inline-flex items-center h-6 w-6 sm:h-8 sm:w-8 justify-center rounded-md shadow border border-orange-500 ${
                        limit === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "border-orange-500"
                      } leading-none`}
                      disabled={limit === 1}
                    >
                      <BiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setLimit(limit + 1)}
                      className={`inline-flex items-center h-6 w-6 sm:h-8 sm:w-8 justify-center rounded-md shadow border border-orange-500 ${
                        page === totalPage
                          ? "opacity-50 cursor-not-allowed"
                          : "border-orange-500"
                      } leading-none`}
                      disabled={limit === parseInt(meta?.total)}
                    >
                      <BiChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {allData ? (
                  <>
                    {allData?.length > 0 ? (
                      <table className="w-full text-left">
                        <thead>
                          <tr className="font-bold text-orange-500">
                            {tableHeadData?.map((data) => data)}
                          </tr>
                          <tr className="font-normal border-b border-orange-600"></tr>
                        </thead>
                        <tbody>{tableBodyData?.map((data) => data)}</tbody>
                      </table>
                    ) : (
                      <div className="min-h-[30vh] flex items-center justify-center">
                        <h2 className="text-md sm:text-xl md:text-2xl text-red-500">
                          No data found
                        </h2>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="min-h-[30vh] flex items-center">
                    <Loader />
                  </div>
                )}
                <div className="flex flex-wrap w-full mt-5 gap-2 justify-end">
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    className={`inline-flex items-center h-6 w-6 sm:h-8 sm:w-8 justify-center rounded-md shadow border border-gray-500 text-gray-500 ${
                      page === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "border-gray-500 text-gray-500"
                    } leading-none`}
                    disabled={page === 1}
                  >
                    <BiChevronLeft className="w-5 h-5" />
                  </button>
                  {Array.from(
                    { length: totalPage >= 5 ? 5 : totalPage },
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`inline-flex items-center h-6 w-6 sm:h-8 sm:w-8 justify-center rounded-md shadow border border-gray-500 text-gray-500 ${
                          page === index + 1
                            ? "bg-orange-600 text-white border-orange-500"
                            : "border-gray-500 text-gray-500"
                        } leading-none`}
                      >
                        {index + 1}
                      </button>
                    )
                  )}
                  {page !== 6 && <span className="text-gray-500">. . .</span>}
                  {page >= 6 &&
                    Array.from(
                      { length: totalPage + 1 },
                      (_, index) =>
                        page === index && (
                          <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`inline-flex items-center h-6 w-6 sm:h-8 sm:w-8 justify-center rounded-md shadow border bg-orange-600 text-white border-orange-500`}
                          >
                            {index}
                          </button>
                        )
                    )}
                  {page >= 6 && page !== totalPage && (
                    <span className="text-gray-500">. . .</span>
                  )}
                  <button
                    onClick={() => handlePageChange(page + 1)}
                    className={`inline-flex items-center h-6 w-6 sm:h-8 sm:w-8 justify-center rounded-md shadow border border-gray-500 text-gray-500 ${
                      page === totalPage
                        ? "opacity-50 cursor-not-allowed"
                        : "border-gray-500 text-gray-500"
                    } leading-none`}
                    disabled={page === totalPage}
                  >
                    <BiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
