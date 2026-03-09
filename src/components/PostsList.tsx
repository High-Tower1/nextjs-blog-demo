import Link from "next/link"
import { Post } from "@/types/post";

interface PostList {
    posts: Post[];
}

// Posts list component
function PostsList({posts}: PostList) {
  return (
    <div className="post-list">
        {
          posts.map((post) => ( // renders each post to its own html
          <div className="post-item" key={post.id}>
            <h2><Link href={`/posts/${post.id}`}>{post.title}</Link></h2>
          </div>
          ))
        }
      </div>
  )
}

export default PostsList