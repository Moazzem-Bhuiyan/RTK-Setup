
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseApi = createApi({

   reducerPath:"api",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://jsonplaceholder.typicode.com",
 
  }),
  endpoints:(builder)=>({
    getPosts:builder.query({
      query:()=> "/photos?_limit=10",
    }),

    getPost:builder.query({
      query:(id)=>`/photos/${id}`,
    })
  })
})


export const { useGetPostsQuery,useGetPostQuery }=baseApi



export default baseApi;