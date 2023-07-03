import styles from "./styles.module.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <input
            type="checkbox"
            className={styles["nav-checkbox"]}
            id="nav-checkbox"
          />
          <div className={styles["nav-background"]} />
          <label htmlFor="nav-checkbox" className={styles["nav-btn"]}>
            <span className={styles["btn-icon"]} />
          </label>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link to="/" className={styles.nav__link}>
                  Item #1
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link to="/" className={styles.nav__link}>
                  Item #2
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
