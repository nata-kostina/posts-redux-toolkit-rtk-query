import styles from "./styles.module.scss"

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={styles.loader__animation}>
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.shadow} />
          <div className={styles.shadow} />
          <div className={styles.shadow} />
        </div>
        <span className={styles.loader__text}>Loading</span>
      </div>
    </div>
  )
}

export default Loader
