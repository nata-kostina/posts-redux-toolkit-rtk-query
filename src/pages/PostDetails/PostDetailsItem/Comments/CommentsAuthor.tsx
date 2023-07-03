import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useGetUserQuery } from "../../../../store/api/api"

interface Props {
  id: number
}

const CommentsAuthor = ({ id }: Props) => {
  const {
    data: user,
    error: userError,
    isFetching: userFetching,
  } = useGetUserQuery(id)
  return (
    <>
      {userError || userFetching || !user ? (
        <>
          <div
            className={cn(
              styles["comments__author-img-box"],
              styles["comments__author-img-box_loading"],
            )}
          />
          <div
            className={cn(
              styles["comments__author-name"],
              styles["comments__author-name_loading"],
            )}
          />
        </>
      ) : (
        <>
          <Link to={`user/${id}`} className={styles["comments__author-link"]}>
            <div className={styles["comments__author-img-box"]}>
              <img
                src={user.image}
                alt="Author avatar"
                className={styles["comments__author-img"]}
              />
            </div>
          </Link>
          <h4 className={styles["comments__author-name"]}>
            <Link to={`user/${id}`} className={styles["comments__author-link"]}>
              {user.username}
            </Link>
          </h4>
        </>
      )}
    </>
  )
}

export default CommentsAuthor
