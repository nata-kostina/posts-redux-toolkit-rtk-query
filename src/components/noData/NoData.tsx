import styles from "./styles.module.scss"
import { HiDocumentSearch } from "react-icons/hi"

const NoData = () => {
  return (
    <div className={styles.info}>
      <HiDocumentSearch className={styles.info__icon} />
      <span className={styles.info__text}>No data found</span>
    </div>
  )
}

export default NoData
