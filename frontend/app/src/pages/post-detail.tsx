import { FunctionComponent } from 'preact';
import { PageProps } from '../types/page';
import { mapAPIPost, Post } from '../models/post';
import { config } from '../config';
import { useAPI } from '../hooks/use-api';
import { PostDetail } from '../components/post-detail';

type PostPageProps = PageProps & {
  slug: string;
};

export const PostDetailPage: FunctionComponent<PostPageProps> = (props: PostPageProps) => {
  const apiPost: Post | null = useAPI(config.API_URL + `/posts/${props.slug}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }, null);
  const post = apiPost && mapAPIPost(apiPost);

  return (
    <main>
      {post == null || <PostDetail post={post} />}
    </main>
  );
};
