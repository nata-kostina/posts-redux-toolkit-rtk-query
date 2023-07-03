import styles from "./styles.module.scss"
import Header from "./../header/Header"
import Footer from "../footer/Footer"
import { Outlet } from "react-router"

const BaseLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout
