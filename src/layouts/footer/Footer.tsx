import styles from "./styles.module.scss"
import { social } from "./../../constants/social"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <ul className={styles["social__list"]}>
            {social.map((item) => (
              <li className={styles["social__item"]} key={item.id}>
                <a href={item.link} className={styles["social__link"]}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles["author"]}>by Natallia Kostsina</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
