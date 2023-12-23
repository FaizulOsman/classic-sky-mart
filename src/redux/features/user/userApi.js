import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["classic-it"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["classic-it"],
    }),
    refreshToken: builder.mutation({
      query: (data) => ({
        url: `/auth/refresh-token`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["classic-it"],
    }),
    getAllUsers: builder.query({
      query: ({ headers }) => ({
        url: `/users`,
        headers: headers,
      }),
      providesTags: ["classic-it"],
    }),
    getSingleUser: builder.query({
      query: ({ id, headers }) => ({
        url: `/users/${id}`,
        headers: headers,
      }),
      providesTags: ["classic-it"],
    }),
    getAllUsersByQuery: builder.query({
      query: ({ headers, limit, page, sortOrder }) => ({
        url: `/users?limit=${limit}&page=${page}&sortOrder=${sortOrder}`,
        headers: headers,
      }),
      providesTags: ["classic-it"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data, headers }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["classic-it"],
    }),
    deleteUser: builder.mutation({
      query: ({ id, headers }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["classic-it"],
    }),
    getMyProfile: builder.query({
      query: ({ headers }) => ({
        url: `/users/my-profile`,
        headers: headers,
      }),
      providesTags: ["classic-it"],
    }),
    updateMyProfile: builder.mutation({
      query: ({ data, headers }) => ({
        url: `/users/my-profile`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["classic-it"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useGetAllUsersByQueryQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} = userApi;
