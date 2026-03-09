import { getDetailPost } from "@/lib/api";

interface Page {
    params: {
        id: number;
    }
}

async function page({params}: Page) {
    const {id} = await params;
    const post = await getDetailPost(id);
    console.log(post);
  return (
    <div className="post-detail">
        <h1>{post.title}</h1>
        <div className="content">
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default page