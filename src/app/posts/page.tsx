import PostsList from "@/components/PostList";
import { getAllPost } from "@/lib/api";

export default async function AllPostPage() {
  const posts = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h1>All Posts</h1>
        <p className="subtitle">Explore all our blog posts and stay updated with the latest content.</p>
      </div>

      <PostsList posts={posts}/>
    </>
  );
}