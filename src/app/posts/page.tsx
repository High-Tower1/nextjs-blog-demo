import PostsList from "@/components/PostsList";
import { getAllPost } from "@/lib/api";

export default async function Home() {
  const posts = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h1>All Posts</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima maxime asperiores eaque quis nulla iure architecto illo nemo ex.</p>
      </div>

      <PostsList posts={posts}/>
    </>
  );
}