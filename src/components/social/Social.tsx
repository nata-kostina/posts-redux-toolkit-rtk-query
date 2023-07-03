import styles from "./styles.module.scss"
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const Social = () => {
  return (
    <ul className={styles.social}>
      {socialItems.map((item) => (
        <li className={styles.social__item} key={item.id}>
          <Link to={item.link} className={styles.social__link}>
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const socialItems = [
  {
    id: 0,
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    id: 1,
    icon: <FaTwitter />,
    link: "#",
  },
  {
    id: 2,
    icon: <FaGooglePlusG />,
    link: "#",
  },
  {
    id: 3,
    icon: <FaPinterestP />,
    link: "#",
  },
]

export default Social
