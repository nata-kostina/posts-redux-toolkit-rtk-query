import { useState } from "react"
import { SortActions, SortValue } from "../types/actions.types"
import PostList from "../components/posts/PostList"
import Pagination from "../components/ui/pagination/Pagination"
import Sorting from "../components/ui/sort/Sorting"
import { useGetPostsQuery } from "../store/api/api"
import Loader from "../components/ui/loader/Loader"

const PostsPage = () => {
  const [sortValue, setSortValue] = useState<SortValue>({
    key: "id",
    order: "asc",
    action: SortActions.ByDefault,
  })

  const [page, setPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(5)

  const { data, error, isFetching } = useGetPostsQuery(
    { page, pageLimit, sortKey: sortValue.key, sortOrder: sortValue.order },
    {
      refetchOnMountOrArgChange: 60,
      refetchOnReconnect: true,
    },
  )

  const changePage = (value: number) => setPage(value)
  const changeSort = (value: string) => {
    if (Object.keys(SortActions).includes(value)) {
      switch (value as keyof typeof SortActions) {
        case "ByDefault":
          setSortValue({
            key: "id",
            order: "asc",
            action: SortActions.ByDefault,
          })
          break
        case "ByTitleAsc":
          setSortValue({
            key: "title",
            order: "asc",
            action: SortActions.ByTitleAsc,
          })
          break
        case "ByTitleDesc":
          setSortValue({
            key: "title",
            order: "desc",
            action: SortActions.ByTitleDesc,
          })
          break
        default:
          break
      }
    }
  }

  return (
    <div>
      {error ? (
        "Error"
      ) : isFetching ? (
        <Loader />
      ) : data?.posts ? (
        <>
          <Pagination
            page={page}
            pageLimit={pageLimit}
            changePage={changePage}
            postTotal={data.total}
          />
          <Sorting sort={sortValue.action} onSortChange={changeSort} />
          <PostList posts={data.posts} />
        </>
      ) : (
        "No data"
      )}
    </div>
  )
}

export default PostsPage
