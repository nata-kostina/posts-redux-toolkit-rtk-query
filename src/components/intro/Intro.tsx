import styles from "./styles.module.scss"
import { useMediaQuery } from "@react-hook/media-query"

interface Props {
  title: string
  imgL: string
  imgS?: string
}

const Intro = ({ title, imgL, imgS }: Props) => {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)")
  const isBigDesktop = useMediaQuery("only screen and (min-width: 1400px)")
  const isHighResolution = useMediaQuery(
    "only screen and (min-resolution: 192dpi)",
  )
  return (
    <div
      className={styles.intro}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${(!isMobile && isHighResolution) || isBigDesktop ? imgL : imgS})`,
      }}
      //   style={{
      //     background: `
      //     linear-gradient(to right, rgba(#000000, 0.4), rgba(#000000, 0.4)),
      //     url(${(!isMobile && isHighResolution) || isBigDesktop ? imgL : imgS})`,
      //   }}
    >
      <div className={styles.container}>
        <div className={styles.intro__content}>
          <h1 className={styles.intro__title}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Intro
