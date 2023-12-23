import api from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: ({ data, headers }) => ({
        url: `/products`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["classic-it"],
    }),

    getAllProduct: builder.query({
      query: ({ limit, page, searchTerm }) => ({
        url: `/products?searchTerm=${searchTerm}&limit=${limit}&page=${page}`,
      }),
      providesTags: ["classic-it"],
    }),

    getSingleProduct: builder.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["classic-it"],
    }),

    deleteSingleProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["classic-it"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useDeleteSingleProductMutation,
} = productApi;
