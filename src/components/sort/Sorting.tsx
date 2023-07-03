import cn from "classnames"
import { SortActions } from "../../types/actions.types"
import styles from "./styles.module.scss"

interface Props {
  sort: SortActions
  onSortChange: (value: string) => void
}

const Sorting = ({ sort, onSortChange }: Props) => {
  return (
    <div className={cn(styles["sorting"])}>
      <div className={cn(styles["sorting__group"])}>
        <select
          className={cn(styles["sorting__select"])}
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option
            value={SortActions.ByDefault}
            className={cn(styles["sorting__option"], {
              [styles["sorting__option_selected"]]:
                SortActions.ByDefault === sort,
            })}
          >
            Sort by default
          </option>
          <optgroup
            label="Sort by title"
            className={cn(styles["sorting__optgroup"])}
          >
            <option
              value={SortActions.ByTitleAsc}
              className={cn(styles["sorting__option"], {
                [styles["sorting__option_selected"]]:
                  SortActions.ByTitleAsc === sort,
              })}
            >
              &uarr; A-Z
            </option>
            <option
              value={SortActions.ByTitleDesc}
              className={cn(styles["sorting__option"], {
                [styles["sorting__option_selected"]]:
                  SortActions.ByTitleDesc === sort,
              })}
            >
              &darr; Z-A
            </option>
          </optgroup>
        </select>
      </div>
    </div>
  )
}

export default Sorting
