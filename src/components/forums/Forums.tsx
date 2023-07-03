import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

const Forums = () => {
  return (
    <div className={styles.forums}>
      <h3 className={styles.forums__heading}>Forums</h3>
      <ul className={styles.forums__list}>
        {forumsItems.map((item) => (
          <li className={styles.forums__item} key={item.id}>
            <Link to="#" className={styles.forums__link}>
              <span>&#10146; {item.title}</span>
              <span className={styles.forums__quantity}>({item.quantity})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const forumsItems = [
  {
    id: 0,
    title: "Neque porro quisquam",
    quantity: 12,
  },
  {
    id: 1,
    title: "Lorem ipsum dolor",
    quantity: 72,
  },
  {
    id: 2,
    title: "Sed vestibulum neque",
    quantity: 24,
  },
  {
    id: 3,
    title: "Aenean varius sem nec",
    quantity: 57,
  },
  {
    id: 4,
    title: "Vivamus vel purus vitae",
    quantity: 76,
  },
]

export default Forums
