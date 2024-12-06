import {apiSlice} from "../API/apiSlice"
export const productApiSlice = apiSlice.injectEndpoints({
      endpoints:(builder)=>({
            getProductCategory: builder.query({
                  query: (query) => {
                    return {
                      url: "/products/categories",
                    };
                  },
                  transformResponse: (response) => {
                    return response
                  },
                  invalidatesTags:['e-commerce']
            }),
            getAllProduct: builder.query({
                  query: (query) => {
                    return {
                      url: "/products",
                    };
                  },
                  transformResponse: (response) => {
                        if (!Array.isArray(response) || response.length === 0) {
                              throw new Error(
                                "Error Loading conventional products or empty response"
                              );
                            }
                    // Extract the data from each item in the response array
                    const data = response.map((item) => ({
                       category:item.category,
                       description:item.description,
                       image:item.image,
                       price:item.price,
                       title:item.title,
                       ratingCount:item.rating.count,
                       rate:item.rating.rate,

                    }));
                    // Return the transformed data
                    return {
                      data
                    };
                  },
                  invalidatesTags:['e-commerce']
            }),
            
            //more
      })
})
export const {
useGetProductCategoryQuery,
useGetAllProductQuery
} = productApiSlice