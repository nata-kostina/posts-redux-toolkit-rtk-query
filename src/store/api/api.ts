import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetPostsResponse } from "./../../types/api.types"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, number>({
      query: (page = 1) => `posts?limit=10&skip=${(page - 1) * 10}`,
    }),
    getPostImage: builder.query<string, number>({
      queryFn: async (arg) => {
        const response = await fetch(`https://randomfox.ca/images/${arg}.jpg`)
        if (!response.ok) {
          return {
            error: {
              status: 500,
              data: "Error",
            },
          }
        }
        const postImg = await response.blob()
        return {
          data: URL.createObjectURL(postImg),
        }
      },
    }),
  }),
})

export const { useGetPostsQuery, useGetPostImageQuery } = api
