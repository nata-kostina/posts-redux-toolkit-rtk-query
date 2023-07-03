import styles from "./styles.module.scss"
import { MdOutlineReportGmailerrorred } from "react-icons/md"

const ErrorComponent = () => {
  return (
    <div className={styles.info}>
      <MdOutlineReportGmailerrorred className={styles.info__icon} />
      <span className={styles.info__text}>Something went wrong...</span>
      <span className={styles.info__text}>Please, reload the page.</span>
    </div>
  )
}

export default ErrorComponent
