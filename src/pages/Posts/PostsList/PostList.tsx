import PostItem from "./PostItem/PostItem"
import { IPost } from "../../../types/entities.types"
import styles from "./styles.module.scss"

interface Props {
  posts: Array<IPost>
}

const PostList = ({ posts }: Props) => {
  return (
    <ul className={styles["post-list"]}>
      {posts.map((post) => (
        <li className={styles["post-list__item"]} key={post.id}>
          <PostItem post={post} key={post.id} />
        </li>
      ))}
    </ul>
  )
}

export default PostList
