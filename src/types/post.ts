export interface PostProps {
    userId: number,
    id: number,
    title: string,
    body: string;
}

export interface PostListProps {
    posts: PostProps[];
}

export interface PostDetailProps {
    post: PostProps;
}