import styles from "./styles.module.scss"
import { BsFillTagsFill } from "react-icons/bs"

interface Props {
  tags: Array<string>
}

const Tags = ({ tags }: Props) => {
  return (
    <div className={styles.tags}>
      <BsFillTagsFill className={styles["tags__icon"]} />
      <ul className={styles["tags__list"]}>
        {tags.map((tag, index, arr) => (
          <li key={tag} className={styles["tags__item"]}>
            <a href="#" className={styles["tags__link"]}>
              {index === arr.length - 1 ? tag : tag + ","}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
