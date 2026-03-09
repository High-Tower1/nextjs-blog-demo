import PostsList from "@/components/PostsList";
import { getLastPost } from "@/lib/api";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to My Next.js Blog Demo</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus facere nostrum? Dignissimos nisi id ipsa, velit sed sapiente officia sequi assumenda? Fuga unde expedita animi illo cumque nulla cum voluptate rem corrupti saepe earum assumenda fugit est repellat officiis sapiente illum, ut modi enim vitae. Delectus officiis nisi itaque.</p>
      </div>

      <PostsList posts={posts}/>
    </>
  );
}
