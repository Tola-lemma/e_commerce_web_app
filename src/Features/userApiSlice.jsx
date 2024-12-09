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
             // Get user by ID
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      providesTags: (result, error, id) => [{ type: 'users', id }],
    }),

    // Update user by ID
    updateUserById: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: userData,
      }),
      transformResponse: (baseQueryReturnValue) => baseQueryReturnValue,
      transformErrorResponse: (fetchBaseQueryError) => fetchBaseQueryError,
      invalidatesTags: (result, error, { id }) => [{ type: 'users', id }],
    }),
            //more
      })
})
export const {
  useUserLogInMutation,
  useUserSignUpMutation,
  seGetUserByIdQuery,
  useUpdateUserByIdMutation,
} = userApiSlice