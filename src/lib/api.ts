import { Post } from "@/types/post";

// Fetches last post from json
export async function getLastPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const posts = await res.json();
  return posts;
}

// Fetches post detail from json
export async function getDetailPost(id:number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  return posts;
}

// Fetches all post from json
export async function getAllPost(): Promise<Post[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return posts;
}