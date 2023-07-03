import { Link } from "react-router-dom"
import { useGetPostImageQuery } from "../../../../store/api/api"
import cn from "classnames"
import styles from "./styles.module.scss"

interface Props {
  id: number
}

const PostImage = ({ id }: Props) => {
  const { data, isFetching, error } = useGetPostImageQuery(id)
  return (
    <>
      {isFetching || error || !data ? (
        <div
          className={cn(
            styles["post__img-box"],
            styles["post__img-box_loading"],
          )}
        ></div>
      ) : (
        <Link to={`posts/${id}`} className={cn(styles["post__img-box"])}>
          <img src={data} alt="Fox" className={styles["post__img"]} />
        </Link>
      )}
    </>
  )
}

export default PostImage
