import cn from "classnames"
import styles from "./styles.module.scss"
import { useMemo } from "react"
import { IPost } from "../../../../types/entities.types"
import { Link } from "react-router-dom"
import Tags from "../../../../components/tags/Tags"
import Comments from "./Comments"
import Author from "./Author"
import PostImage from "./PostImage"

interface Props {
  post: IPost
}

const PostItem = ({ post }: Props) => {
  const body = useMemo(() => {
    return truncateBody(post?.body ?? "")
  }, [post])

  return (
    <>
      {post && (
        <div className={cn(styles.post)}>
          <PostImage id={post.id} />
          <div className={cn(styles["post__content"])}>
            <Author id={post.id} />
            <h2 className={cn(styles["post__heading"])}>
              <Link
                to={`posts/${post.id}`}
                className={cn(styles["post__link"])}
              >
                {post?.id} {post?.title}
              </Link>
            </h2>
            <div className={styles["post__tags-box"]}>
              <Tags tags={post.tags} />
            </div>
            <p className={cn(styles["post__text"])}>{body}</p>
            <Link
              to={`posts/${post.id}`}
              className={cn(styles["btn-continue"])}
            >
              Continue reading &rarr;
            </Link>
            <Comments id={post.id} />
          </div>
        </div>
      )}
    </>
  )
}

function truncateBody(body: string) {
  return body.length > 120 ? body.slice(0, 121) + "..." : body
}

export default PostItem
