import { useState } from "react"
import Child from "./Child"
import PostList from "./components/posts/PostList"
import { useDeletePostMutation } from "./store/api/api"

function App() {
  const [current, setCurrent] = useState<"GetPosts" | "Other">("GetPosts")
  const [deletePost] = useDeletePostMutation()
  const toggle = () => {
    setCurrent(() => (current === "GetPosts" ? "Other" : "GetPosts"))
  }
  const onDeletePost = () => {
    deletePost(1)
  }
  return (
    <div>
      <button onClick={onDeletePost}>Delete post #1</button>
      <button onClick={() => toggle()}>Toggle</button>
      {current === "GetPosts" ? <PostList /> : <Child />}
    </div>
  )
}

export default App
