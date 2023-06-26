import PostItem from "./PostItem"
import { IPost } from "./../../types/entities.types"

interface Props {
  posts: Array<IPost>
}

const PostList = ({ posts }: Props) => {
  return (
    <div>
      {posts.length
        ? posts.map((post) => <PostItem post={post} key={post.id} />)
        : "Not posts"}
    </div>
  )
}

export default PostList
