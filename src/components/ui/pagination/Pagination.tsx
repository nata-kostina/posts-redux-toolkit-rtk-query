import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri"
import cn from "classnames"
import styles from "./styles.module.scss"

interface Props {
  page: number
  pageLimit: number
  postTotal: number
  changePage: (value: number) => void
}

const Pagination = ({ page, pageLimit, postTotal, changePage }: Props) => {
  const pageTotal = Math.floor(postTotal / pageLimit)

  const onBtnClick = (value: "+" | "-") => {
    let newPage = page
    if (value === "+") newPage++
    if (value === "-") newPage--

    if (newPage > 0 && newPage <= pageTotal) {
      changePage(newPage)
    }
  }
  return (
    <div className={cn(styles["pagination"])}>
      <button
        disabled={page === 1}
        onClick={() => onBtnClick("-")}
        className={cn(styles["btn-pagination"])}
      >
        <RiArrowLeftSFill />
      </button>
      <span className={cn(styles["current-page"])}>
        {page} / {pageTotal}
      </span>
      <button
        disabled={page === pageTotal}
        onClick={() => onBtnClick("+")}
        className={cn(styles["btn-pagination"])}
      >
        <RiArrowRightSFill />
      </button>
    </div>
  )
}

export default Pagination
