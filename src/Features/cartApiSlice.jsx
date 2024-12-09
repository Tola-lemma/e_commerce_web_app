import { apiSlice } from "../API/apiSlice";
export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (product) => ({
        url: "/carts",
        method: "POST",
        body: product,
      }),
      transformResponse(baseQueryReturnValue) {
        return baseQueryReturnValue;
      },
      transformErrorResponse(fetchBaseQueryError) {
        return fetchBaseQueryError;
      },
      invalidatesTags: ["e-commerce"],
    }),
    // Get all items in the cart
    getAllCarts: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      providesTags: ["e-commerce"],
    }),

    // Get a cart by its ID
    getCartById: builder.query({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      providesTags: (result, error, id) => [{ type: "e-commerce", id }],
    }),

    // Get carts with a limit
    getCartsWithLimit: builder.query({
      query: (limit) => ({
        url: `/carts?limit=${limit}`,
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      providesTags: ["e-commerce"],
    }),

    // Get carts in a date range
    getCartsInDateRange: builder.query({
      query: ({ startdate, enddate }) => ({
        url: `/carts?startdate=${startdate}&enddate=${enddate}`,
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      providesTags: ["e-commerce"],
    }),

    // Get carts by user ID
    getCartsByUserId: builder.query({
      query: (userId) => ({
        url: `/carts/user/${userId}`,
        method: "GET",
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      providesTags: (result, error, userId) => [{ type: "e-commerce", userId }],
    }),

    // Update a cart by ID
    updateCartById: builder.mutation({
      query: ({ id, cartData }) => ({
        url: `/carts/${id}`,
        method: "PUT",
        body: cartData,
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      invalidatesTags: (result, error, { id }) => [{ type: "e-commerce", id }],
    }),

    // Delete a cart by ID
    deleteCartById: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      invalidatesTags: (result, error, id) => [{ type: "e-commerce", id }],
    }),

    //more
  }),
});
export const {
  useAddToCartMutation,
  useGetAllCartsQuery,
  useGetCartByIdQuery,
  useGetCartsWithLimitQuery,
  useGetCartsInDateRangeQuery,
  useGetCartsByUserIdQuery,
  useUpdateCartByIdMutation,
  useDeleteCartByIdMutation,
} = cartApiSlice;
