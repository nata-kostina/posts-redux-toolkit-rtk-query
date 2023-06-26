import { IPost } from "./entities.types"

export type GetPostsArgs = {
  page: number
  pageLimit: number
  sortKey: keyof IPost
  sortOrder: "asc" | "desc"
}

export type GetPostsResponse = {
  posts: Array<IPost>
  total: number
}
