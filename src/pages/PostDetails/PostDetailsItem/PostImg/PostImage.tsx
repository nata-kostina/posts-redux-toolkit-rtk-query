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
        <div className={styles["post__img-box"]}>
          <img src={data} alt="Fox" className={styles["post__img"]} />
        </div>
      )}
    </>
  )
}

export default PostImage
