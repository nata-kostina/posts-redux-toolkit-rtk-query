import { useState } from "react"
import { useGetPostsQuery } from "../../store/api/api"
import Pagination from "../ui/pagination/Pagination"
import PostItem from "./PostItem"

const PostList = () => {
  const [page, setPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(5)

  const { data, error, isFetching } = useGetPostsQuery(
    { page, pageLimit },
    {
      refetchOnMountOrArgChange: 60,
      refetchOnReconnect: true,
    },
  )

  const changePage = (value: number) => setPage(value)

  return (
    <div>
      {error ? (
        "Error!"
      ) : isFetching ? (
        "Loading..."
      ) : data?.posts?.length ? (
        <>
          <Pagination
            page={page}
            pageLimit={pageLimit}
            changePage={changePage}
          />
          {data?.posts?.map((post) => (
            <PostItem
              id={post.id}
              key={post.id}
              page={page}
              pageLimit={pageLimit}
            />
          ))}
        </>
      ) : (
        "There are no posts"
      )}
    </div>
  )
}

export default PostList
