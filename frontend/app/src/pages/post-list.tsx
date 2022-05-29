import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { PageProps } from '../types/page';
import { PostList } from '../components/post-list';

import { config } from '../config';
import { Post } from '../types/post';

type PostListPageProps = PageProps;

export const PostListPage: FunctionComponent<PostListPageProps> = (props: PostListPageProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(config.API_URL + '/posts', {
      method: 'GET',
      mode: 'cors',
      headers: {
        accept: 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) { throw new Error(res.statusText); }
        return res.json();
      })
      .then(json => {
        console.debug(json);
        setPosts(json);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
};
