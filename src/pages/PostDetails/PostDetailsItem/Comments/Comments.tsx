import CreationDate from "../../../../components/creationDate/CreationDate"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useGetCommentsQuery } from "../../../../store/api/api"
import CommentsAuthor from "./CommentsAuthor"

interface Props {
  postId: number
}

const Comments = ({ postId }: Props) => {
  const {
    data: comments,
    isError: commentsError,
    isFetching: commentsFetching,
  } = useGetCommentsQuery(postId)

  return (
    <div className={styles.comments} id="comments">
      <h3 className={styles.comments__heading}>03 Comments</h3>
      <ul className={styles.comments__list}>
        <li className={styles.comments__item}>
          {commentsError || commentsFetching || !comments ? (
            <>
              <div
                className={cn(
                  styles["comments__date"],
                  styles["comments__date_loading"],
                )}
              />
              <div
                className={cn(
                  styles["comments__text"],
                  styles["comments__text_loading"],
                )}
              />
            </>
          ) : (
            comments && (
              <>
                <CommentsAuthor id={comments.user.id} />
                <div className={styles["comments__date"]}>
                  <CreationDate />
                </div>
                <p className={styles["comments__text"]}>{comments.body}</p>
                <button className={styles["btn-reply"]}>Reply</button>
              </>
            )
          )}
        </li>
      </ul>
    </div>
  )
}

export default Comments
