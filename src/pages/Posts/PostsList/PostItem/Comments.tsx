import CommentsLink from "../../../../components/comments/CommentsLink"
import cn from "classnames"
import styles from "./styles.module.scss"
import { useGetCommentsQuery } from "../../../../store/api/api"

interface Props {
  id: number
}
const Comments = ({ id }: Props) => {
  const { data, isFetching, error } = useGetCommentsQuery(id)
  const quantity = Array.isArray(data) ? data.length : 1
  return (
    <>
      {isFetching || error || !data ? (
        <div
          className={cn(
            styles["post__comments"],
            styles["post__comments_loading"],
          )}
        ></div>
      ) : (
        <div className={cn(styles["post__comments"])}>
          <CommentsLink id={id} quantity={quantity} type="short" />
        </div>
      )}
    </>
  )
}

export default Comments
