import { useParams } from "react-router"
import ImgS from "../../assets/img/posts/intro-post-details-s.jpg"
import ImgL from "../../assets/img/posts/intro-post-details-l.jpg"
import PostDetailsItem from "./PostDetailsItem/PostDetailsItem"
import MainLayout from "./../../layouts/main/MainLayout"
import ErrorComponent from "../../components/error/ErrorComponent"

const PostDetails = () => {
  const { postId } = useParams()

  return (
    <MainLayout introText="Post details" introImgS={ImgS} introImgL={ImgL}>
      {postId ? <PostDetailsItem postId={+postId} /> : <ErrorComponent />}
    </MainLayout>
  )
}

export default PostDetails
