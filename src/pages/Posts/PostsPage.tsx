import { useState } from "react"
import { SortActions, SortValue } from "../../types/actions.types"
import PostList from "./PostsList/PostList"
import Pagination from "../../components/pagination/Pagination"
import Sorting from "../../components/sort/Sorting"
import { useGetPostsQuery } from "../../store/api/api"
import Loader from "../../components/loader/Loader"
import styles from "./styles.module.scss"
import ImgS from "../../assets/img/posts/intro-posts-s.jpg"
import ImgL from "../../assets/img/posts/intro-posts-l.jpg"
import ErrorComponent from "./../../components/error/ErrorComponent"
import MainLayout from "./../../layouts/main/MainLayout"
import NoData from "../../components/noData/NoData"

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
    <MainLayout introText="Posts" introImgS={ImgS} introImgL={ImgL}>
      {error ? (
        <ErrorComponent />
      ) : isFetching ? (
        <Loader />
      ) : data?.posts?.length ? (
        <>
          <div className={styles.tools}>
            <Sorting sort={sortValue.action} onSortChange={changeSort} />
          </div>
          <PostList posts={data.posts} />
          <Pagination
            page={page}
            pageLimit={pageLimit}
            changePage={changePage}
            postTotal={data?.total ?? 0}
          />
        </>
      ) : (
        <NoData />
      )}
    </MainLayout>
  )
}

export default PostsPage
