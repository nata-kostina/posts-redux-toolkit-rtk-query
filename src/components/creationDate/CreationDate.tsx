import styles from "./styles.module.scss"
import { CiClock2 } from "react-icons/ci"

const CreationDate = () => {
  return (
    <div className={styles.date}>
      <CiClock2 className={styles.date__icon} />
      <span className={styles.date__text}>Yesterday at 08:20 am</span>
    </div>
  )
}

export default CreationDate
