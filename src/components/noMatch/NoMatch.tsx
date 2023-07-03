import { useRouteError } from "react-router"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { RiArrowGoBackLine } from "react-icons/ri"

const NoMatch = () => {
  const error = useRouteError()
  console.log("error: ", error)
  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <h2 className={styles.error__title}>Oops! Error</h2>
        <h1 className={styles.error__code}>404</h1>
        <p className={styles.error__explanation}>
          The page you are looking for doesn't exist.
        </p>
        <p className={styles.error__explanation}>
          The page might have been renamed, move, removed or temporary
          unavailable.
        </p>
        <Link to={"/"} className={styles.btn}>
          Go to home
          <span className={styles["btn-icon-box"]}>
            <AiOutlineHome className={styles["icon"]} />
          </span>
        </Link>
        <Link to={"/"} className={styles.btn}>
          Return back
          <span className={styles["btn-icon-box"]}>
            <RiArrowGoBackLine className={styles["icon"]} />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NoMatch
