import { FunctionComponent } from "preact";
import { Post } from "../types/post";

type PostListItemProps = {
  post: Post
};

export const PostListItem: FunctionComponent<PostListItemProps> = ({ post }: PostListItemProps) => {
  return (
    <li>
      <article>
        <a href={`/posts/${post.slug}`}><h2>{post.title}</h2></a>
        <p>{post.content}</p>
      </article>
    </li>
  );
};