import { FunctionComponent } from 'preact';
import { PageProps } from '../types/page';
import { PostList } from '../components/post-list';

import { config } from '../config';
import { mapAPIPost, APIPost, Post } from '../models/post';
import { useAPI } from '../hooks/use-api';

type PostListPageProps = PageProps;

export const PostListPage: FunctionComponent<PostListPageProps> = (props: PostListPageProps) => {
  const posts: Post[] = useAPI<APIPost[]>(config.API_URL + '/posts', {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }, []).map(mapAPIPost);

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
};
