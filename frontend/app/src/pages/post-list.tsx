import { FunctionComponent } from 'preact';
import { PageProps } from '../types/page';

import { PostList } from '../components/post-list';

type PostListPageProps = PageProps;

export const PostListPage: FunctionComponent<PostListPageProps> = (props: PostListPageProps) => {
  const post = {
    slug: 'slug',
    title: '記事タイトル',
    content: '記事本文',
    createdDate: new Date,
    lastUpdatedDate: new Date,
  };
  return (
    <main>
      <PostList posts={[post, post, post]} />
    </main>
  );
};
