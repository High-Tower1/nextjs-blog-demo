import { PostDetailProps } from "@/types/post";

function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="post-detail">
        <h1>{post.title}</h1>
        <div className="content">
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default PostDetail