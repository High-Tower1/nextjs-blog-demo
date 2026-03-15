import PostDetail from "@/components/PostDetail";
import { getPostDetail } from "@/lib/api";
import { Page } from "@/types/page";

async function PostDetailPage({params}: Page) {
    const {id} = await params;
    const post = await getPostDetail(id);

  return (
    <PostDetail post={post}/>
  )
}

export default PostDetailPage