import Social from "../../../../components/social/Social"
import { useGetUserQuery } from "../../../../store/api/api"
import styles from "./styles.module.scss"
import cn from "classnames"
import { Link } from "react-router-dom"

interface Props {
  id: number
}

const Author = ({ id }: Props) => {
  const { data, error, isFetching } = useGetUserQuery(id)
  return (
    <div className={styles.author}>
      {error || isFetching || !data ? (
        <>
          <div
            className={cn(
              styles["author__img-box"],
              styles["author__img-box_loading"],
            )}
          ></div>
          <span
            className={cn(styles.author__name, styles.author__name_loading)}
          ></span>
        </>
      ) : (
        <>
          <Link to={`users/${id}`} className={styles.author__avatar}>
            <div className={styles["author__img-box"]}>
              <img
                src={data.image}
                alt="User avatar"
                className={styles.author__img}
              />
            </div>
          </Link>
          <Link to={`users/${id}`} className={styles.author__name}>
            {data.username}
          </Link>
          <p className={styles.author__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus
            erat, fermentum nec egestas a, finibus non neque. Aenean non.
          </p>
          <div className={styles.author__social}>
            <Social />
          </div>
        </>
      )}
    </div>
  )
}

export default Author
