import { FaRegComments } from "react-icons/fa"
import styles from "./styles.module.scss"
import { HashLink } from "react-router-hash-link"

interface Props {
  id: number
  quantity: number
  type: "short" | "long"
}

const CommentsLink = ({ id, type, quantity }: Props) => {
  const text =
    type === "short"
      ? quantity
      : quantity === 1
      ? quantity + " Comment"
      : quantity + " Comments"
  return (
    <HashLink
      smooth
      to={`posts/${id}/#comments`}
      className={styles["comments__link"]}
    >
      <FaRegComments className={styles["comments__icon"]} />
      <span className={styles["comments__quantity"]}>{text}</span>
    </HashLink>
  )
}

export default CommentsLink
