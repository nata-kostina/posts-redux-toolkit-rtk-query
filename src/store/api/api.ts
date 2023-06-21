import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetPostsArgs, GetPostsResponse } from "../../types/api.types"
import { IComment, IPost } from "../../types/entities.types"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/",
  }),
  tagTypes: ["Post", "Comment"],
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      query: ({ page, pageLimit }) => `posts?_limit=${pageLimit}&_page=${page}`,
      providesTags: (response) =>
        response?.posts
          ? [
              ...response.posts.map(({ id }) => ({
                type: "Post" as const,
                id,
              })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
      transformResponse: (response: Array<IPost>, meta) => ({
        posts: response,
        total: +(meta?.response?.headers.get("X-Total-Count") ?? 0),
      }),
    }),
    getPostImage: builder.query<string, number>({
      queryFn: async (id) => {
        const response = await fetch(`https://randomfox.ca/images/${id}.jpg`)
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
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    deletePost: builder.mutation<{}, number>({
      query: (id) => ({ url: `posts/${id}`, method: "DELETE" }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    getComments: builder.query<IComment, number>({
      query: (id) => `comments/${id}`,
      providesTags: (response) =>
        response
          ? [
              {
                type: "Comment" as const,
                id: response.id,
              },
              { type: "Comment", id: "LIST" },
            ]
          : [{ type: "Comment", id: "LIST" }],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostImageQuery,
  useDeletePostMutation,
  useGetCommentsQuery,
} = api
