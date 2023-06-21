import { IPost } from "./entities.types"

export type GetPostsArgs = {
  page: number
  pageLimit: number
}

export type GetPostsResponse = {
  posts: Array<IPost>
  total: number
}
