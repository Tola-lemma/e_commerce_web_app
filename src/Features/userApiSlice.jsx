import {apiSlice} from "../API/apiSlice"
export const userApiSlice = apiSlice.injectEndpoints({
      endpoints:(builder)=>({
            userLogIn:builder.mutation({
                  query:(body)=>({
                        url:"/auth/login",
                        method:"POST",
                        body,
                  }),
                  transformResponse(baseQueryReturnValue){
                        return baseQueryReturnValue;
                  },
                  transformErrorResponse(fetchBaseQueryError){
                        return fetchBaseQueryError
                  },
                  invalidatesTags:['e-commerce']
            }),
            userSignUp:builder.mutation({
                  query:(body)=>({
                        url:"/users",
                        method:"POST",
                        body,
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
  useUserLogInMutation,
  useUserSignUpMutation
} = userApiSlice