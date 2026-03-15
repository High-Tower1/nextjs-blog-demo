import PostsList from "@/components/PostList";
import { getLastPost } from "@/lib/api";

export default async function HomePage() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to My Next.js Blog Demo</h1>
        <p className="subtitle">This is a simple blog application built with Next.js to demonstrate routing, data fetching, and theme switching.</p>
      </div>

      <PostsList posts={posts}/>
    </>
  );
}
