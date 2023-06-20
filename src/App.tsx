import React, { useState } from "react"
import Child from "./Child"
import PostList from "./components/posts/PostList"

function App() {
  const [current, setCurrent] = useState<"GetPosts" | "Other">("GetPosts")
  const toggle = () => {
    setCurrent(() => (current === "GetPosts" ? "Other" : "GetPosts"))
  }
  return (
    <div>
      <button onClick={() => toggle()}>Toggle</button>
      {current === "GetPosts" ? <PostList /> : <Child />}
    </div>
  )
}

export default App
