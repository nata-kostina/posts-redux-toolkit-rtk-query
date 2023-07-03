import styles from "./styles.module.scss"
import Intro from "../../components/intro/Intro"

interface Props {
  children: JSX.Element
  introText: string
  introImgS: string
  introImgL: string
}

const MainLayout = ({ introText, introImgS, introImgL, children }: Props) => {
  return (
    <>
      <Intro title={introText} imgS={introImgS} imgL={introImgL} />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.section__inner}>{children}</div>
        </div>
      </section>
    </>
  )
}

export default MainLayout
