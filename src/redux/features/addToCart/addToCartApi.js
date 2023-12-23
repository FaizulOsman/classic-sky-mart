import api from "../../api/apiSlice";

const addToCartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createAddToCart: builder.mutation({
      query: (data) => ({
        url: `/addToCart/create-addToCart`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["classic-it"],
    }),

    getAllAddToCart: builder.query({
      query: ({ limit, page, searchTerm }) => ({
        url: `/addToCart?searchTerm=${searchTerm}&limit=${limit}&page=${page}`,
      }),
      providesTags: ["classic-it"],
    }),

    getSingleAddToCart: builder.query({
      query: ({ id }) => ({
        url: `/addToCart/${id}`,
      }),
      providesTags: ["classic-it"],
    }),

    deleteSingleAddToCart: builder.mutation({
      query: ({ id }) => ({
        url: `/addToCart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["classic-it"],
    }),
  }),
});

export const {
  useCreateAddToCartMutation,
  useGetAllAddToCartQuery,
  useGetSingleAddToCartQuery,
  useDeleteSingleAddToCartMutation,
} = addToCartApi;
