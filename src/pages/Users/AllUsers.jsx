import React, { useEffect, useState } from "react";
import {
  useGetAllUsersQuery,
  useGetMyProfileQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";
import Table from "../../components/Shared/Table";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");

  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access-token") : null;

  const headers = {
    authorization: accessToken,
  };

  const { data: getAllUsers } = useGetAllUsersQuery({
    limit,
    page,
    searchTerm,
    headers,
  });

  const { data: getMyProfile } = useGetMyProfileQuery({ headers });

  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation();

  const handleSetRole = ({ user, e }) => {
    if (e.target.checked) {
      const data = { role: "admin" };
      updateUser({ id: user?.id, data, headers });
    } else {
      const data = { role: "user" };
      updateUser({ id: user?.id, data, headers });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("User has been updated.");
    }
    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-10 mb-20">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="max-w-7xl mx-auto sm:mx-0">
          <input
            className="shadow appearance-none border border-orange-600 rounded max-w-4xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="search-input"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Table
        tableTitle={`Users (${
          getAllUsers?.meta?.total ? getAllUsers?.meta?.total : 0
        })`}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        meta={getAllUsers?.meta}
        allData={getAllUsers?.data}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        tableHeadData={[
          <th key="name" className="sm:px-3 pt-0 pb-3 hidden sm:table-cell">
            Name
          </th>,
          <th key="email" className="sm:px-3 pt-0 pb-3">
            Email
          </th>,
          <th key="available" className="sm:px-3 pt-0 pb-3">
            Role
          </th>,
        ]}
        tableBodyData={getAllUsers?.data?.map((data, index) => (
          <tr key={index} className="border-b border-orange-600">
            <td className="sm:p-3 py-2 hidden sm:table-cell">{data?.name}</td>
            <td className="sm:p-3 py-2">{data?.email}</td>
            <td className="sm:p-3 py-2">
              <input
                type="checkbox"
                className="toggle toggle-xs sm:toggle-sm toggle-primary"
                checked={
                  data?.role === "admin" || data?.role === "super_admin"
                    ? true
                    : false
                }
                onClick={(e) => handleSetRole({ user: data, e })}
                disabled={
                  (data?.email === getMyProfile?.data?.email ? true : false) ||
                  (data?.role === "super_admin" ? true : false)
                }
              />
            </td>
          </tr>
        ))}
      />
    </div>
  );
};

export default AllUsers;
