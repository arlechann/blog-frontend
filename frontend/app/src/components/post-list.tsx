import { ComponentChildren, FunctionComponent } from 'preact';
import { Post } from '../types/post';
import { PostListItem } from './post-list-item';

type PostListProps = {
  posts: Post[],
};

export const PostList: FunctionComponent<PostListProps> = (props: PostListProps) => {
  return (
    <ul>
      {...props.posts.map(post => (<PostListItem post={post} />))}
    </ul>
  );
};