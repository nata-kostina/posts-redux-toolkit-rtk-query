import { Link } from "react-router-dom"
import { useGetUserQuery } from "../../../../store/api/api"
import cn from "classnames"
import styles from "./styles.module.scss"

interface Props {
  id: number
}

const Author = ({ id }: Props) => {
  const { data, isFetching, error } = useGetUserQuery(id)

  return (
    <Link
      to="#"
      className={cn(styles["post__author"], styles["post__author-link"])}
    >
      {isFetching || error ? (
        <>
          <div
            className={cn(
              styles["post__author-img-box"],
              styles["post__author-img-box_loading"],
            )}
          ></div>
          <div
            className={cn(
              styles["post__author-name"],
              styles["post__author-name_loading"],
            )}
          ></div>
        </>
      ) : (
        <>
          <div className={cn(styles["post__author-img-box"])}>
            <img
              src={data?.image}
              alt="Author"
              className={cn(styles["post__author-img"])}
            />
          </div>
          <span className={cn(styles["post__author-name"])}>
            {data?.firstName} {data?.lastName}
          </span>
        </>
      )}
    </Link>
  )
}

export default Author
