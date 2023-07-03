import styles from "./styles.module.scss"
import CreationDate from "../../../components/creationDate/CreationDate"
import Tags from "../../../components/tags/Tags"
import { useGetPostQuery } from "../../../store/api/api"
import Loader from "../../../components/loader/Loader"
import CommentsLink from "../../../components/comments/CommentsLink"
import Social from "../../../components/social/Social"
import Forums from "../../../components/forums/Forums"
import Author from "./Author/Author"
import PostImage from "./PostImg/PostImage"
import Comments from "./Comments/Comments"
import ErrorComponent from "../../../components/error/ErrorComponent"

interface Props {
  postId: number
}

const PostDetailsItem = ({ postId }: Props) => {
  const {
    data: post,
    isError: postError,
    isFetching: postsFetching,
  } = useGetPostQuery(postId)

  return (
    <>
      {postsFetching ? (
        <Loader />
      ) : postError || !post ? (
        <ErrorComponent />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.wrapper__inner}>
              <div className={styles.post}>
                <PostImage id={post.id} />
                <div className={styles["post__top-info"]}>
                  <CreationDate />
                  <CommentsLink id={post.id} quantity={1} type="long" />
                </div>
                <h2 className={styles["post__title"]}>{post.title}</h2>
                <p className={styles["post__body"]}>{post.body}</p>
                <div className={styles.post__footer}>
                  <Tags tags={post.tags} />
                  <Social />
                </div>
              </div>
              <div className={styles.sidebar}>
                <Forums />
              </div>
              <Author id={post.userId} />
              <Comments postId={post.id} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PostDetailsItem
