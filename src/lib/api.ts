import { PostProps } from "@/types/post";

// Fetches last post from json
export async function getLastPost(): Promise<PostProps[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    if(!res.ok) {
      throw new Error("Failed to fetch data");
    }
    
    const posts = await res.json();
    return posts;

  } catch(error) {
    console.log(error);
    return [];
  }
}

// Fetches post detail from json
export async function getPostDetail(id:number): Promise<PostProps> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const posts = await res.json();
    return posts;

  } catch(error) {
    console.log(error);
    return {} as PostProps;
  }
}

// Fetches all post from json
export async function getAllPost(): Promise<PostProps[]> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);  
    if(!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const posts = await res.json();
    return posts;

  } catch(error) {
    console.log(error);
    return [];
  }
  
}