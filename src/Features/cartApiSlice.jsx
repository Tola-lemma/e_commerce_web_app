import {apiSlice} from "../API/apiSlice"
export const cartApiSlice = apiSlice.injectEndpoints({
      endpoints:(builder)=>({
            addToCart:builder.mutation({
                  query:(product)=>({
                        url:"/carts",
                        method:"POST",
                        body:product
                  }),
                  transformResponse(baseQueryReturnValue){
                        return baseQueryReturnValue;
                  },
                  transformErrorResponse(fetchBaseQueryError){
                        return fetchBaseQueryError
                  },
                  invalidatesTags:['e-commerce']
            }),
           
            //more
      })
})
export const {
  useAddToCartMutation,
} = cartApiSlice