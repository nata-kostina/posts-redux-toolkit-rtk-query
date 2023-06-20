import React from "react"
import { useGetPostsQuery, useGetPostImageQuery } from "../../store/api/api"
import cn from "classnames"
import styles from "./styles.module.scss"

interface Props {
  id: number
}

const PostItem = ({ id }: Props) => {
  const { post } = useGetPostsQuery(1, {
    selectFromResult: ({ data }) => ({
      post: data?.posts.find((post) => post.id === id),
    }),
  })
  const { data: postImg } = useGetPostImageQuery(id)

  return (
    <div className={cn(styles.post)}>
      <div className={cn(styles["post__img-box"])}>
        <img src={postImg} alt="Post" className={cn(styles["post__img"])} />
      </div>
      <div className={cn(styles["post__content"])}>
        <h2 className={cn(styles["heading"])}>{post?.title}</h2>
        <div className={cn(styles["tags-box"])}>
          <ul className={cn(styles.list, styles["tags-list"])}>
            {post?.tags.map((tag) => (
              <li key={tag} className={cn(styles["list__item"])}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <p className={cn(styles["text"])}>{post?.body}</p>
        <a href="#" className={cn(styles.btn, styles["btn-text"])}>
          Continue reading &rarr;
        </a>
      </div>
    </div>
  )
}

export default PostItem
