import React from "react"
import { useGetPostsQuery } from "../../store/api/api"
import PostItem from "./PostItem"

const PostList = () => {
  const { data, error, isFetching } = useGetPostsQuery(1, {
    refetchOnMountOrArgChange: 60,
    refetchOnReconnect: true,
  })

  return (
    <div>
      PostList
      <div>
        {error
          ? "Error!"
          : isFetching
          ? "Loading..."
          : data?.posts.length
          ? data?.posts.map((post) => <PostItem id={post.id} key={post.id} />)
          : "There are no posts"}
      </div>
    </div>
  )
}

export default PostList
