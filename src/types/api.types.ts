import { IPost } from "./entities.types"

export interface GetPostsResponse {
  posts: Array<IPost>
  total: number
}
