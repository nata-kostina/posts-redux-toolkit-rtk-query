import {
  useGetPostsQuery,
  useGetPostImageQuery,
  useGetCommentsQuery,
} from "../../store/api/api"
import cn from "classnames"
import styles from "./styles.module.scss"
import { BsFillTagsFill } from "react-icons/bs"
import { FaRegComments } from "react-icons/fa"
import { CiClock2 } from "react-icons/ci"
import UserAvatar from "../../assets/img/users/avatar.jpg"
import { useState } from "react"

interface Props {
  id: number
  page: number
  pageLimit: number
}

const PostItem = ({ id, page, pageLimit }: Props) => {
  const { post } = useGetPostsQuery(
    { page, pageLimit },
    {
      selectFromResult: ({ data }) => {
        return {
          post: data?.posts?.find((post) => post.id === id),
        }
      },
    },
  )
  const { data: postImg } = useGetPostImageQuery(id)
  const { data: comments } = useGetCommentsQuery(id)
  const [showComments, setShowComments] = useState(false)
  const toggleComments = () => {
    setShowComments((prev) => !prev)
  }
  const body = truncateBody(post?.body ?? "")
  console.log("id: ", comments)
  return (
    <>
      {post && (
        <div className={cn(styles.post)}>
          <a href="#" className={cn(styles["post__img-box"])}>
            <img src={postImg} alt="Fox" className={cn(styles["post__img"])} />
          </a>

          <div className={cn(styles["post__content"])}>
            <a
              href="#"
              className={cn(styles["author"], styles["author__link"])}
            >
              <div className={cn(styles["author__img-box"])}>
                <img
                  src={UserAvatar}
                  alt="Author"
                  className={cn(styles["img"])}
                />
              </div>
              <span className={cn(styles["author__name"])}>John Smith</span>
            </a>
            <h2 className={cn(styles["post__heading"])}>
              <a href="#" className={cn(styles["post__link"])}>
                {post?.id} {post?.title}
              </a>
            </h2>
            <div className={cn(styles["tags-box"])}>
              <span className={cn(styles["tags-icon-box"])}>
                <BsFillTagsFill className={cn(styles["tags-icon"])} />
              </span>
              <ul className={cn(styles["tags-list"])}>
                {post?.tags.map((tag, index, arr) => (
                  <li key={tag} className={cn(styles["list__item"])}>
                    <a href="#" className={cn(styles["tag-link"])}>
                      {index === arr.length - 1 ? tag : tag + ","}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className={cn(styles["post__text"])}>{body}</p>
            <div className={cn(styles["post__footer"])}>
              <a href="#" className={cn(styles["btn-continue"])}>
                Continue reading &rarr;
              </a>
              <button
                className={cn(styles["btn-comment"])}
                onClick={toggleComments}
              >
                <FaRegComments className={cn(styles["comment-icon"])} />
                <span className={cn(styles["comment-quantity"])}>1</span>
              </button>
            </div>
            <div
              className={cn(styles["post__comments"], {
                [styles["post__comments_open"]]: showComments,
              })}
            >
              <h3 className={cn(styles["comments__header"])}>
                <span className={cn(styles["header__text"])}>
                  {" "}
                  <span className={cn(styles["comments__number"])}>1</span>{" "}
                  Comment
                </span>
              </h3>
              <ul className={cn(styles["comments__list"])}>
                <li className={cn(styles["comments__item"])}>
                  <a href="#" className={cn(styles["user-img-box"])}>
                    <img
                      src={UserAvatar}
                      alt="User"
                      className={cn(styles["user-img"])}
                    />
                  </a>
                  <div className={cn(styles["comments__content"])}>
                    <a href="#" className={cn(styles["comments__author"])}>
                      {comments?.user.username}
                    </a>
                    <div className={cn(styles["comments__date-box"])}>
                      <CiClock2 className={cn(styles["date-icon"])} />
                      <span className={cn(styles["date-text"])}>
                        Yesterday at 08:20 am
                      </span>
                    </div>
                    <h4 className={cn(styles["comments__title"])}>
                      Neque porro quisquam est qui dolorem
                    </h4>
                    <p className={cn(styles["comments__body"])}>
                      {comments?.body}
                    </p>
                  </div>
                  <button className={cn(styles["btn-reply"])}>Reply</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function truncateBody(body: string) {
  return body.length > 120 ? body.slice(0, 121) + "..." : body
}

export default PostItem
