import { FunctionComponent } from 'preact';
import { format } from 'date-fns';
import { PageProps } from '../types/page';
import { Post } from '../types/post';

type PostPageProps = PageProps & {
  slug: string;
};

export const PostPage: FunctionComponent<PostPageProps> = (props: PostPageProps) => {
  const post: Post = {
    slug: 'slug',
    title: '記事タイトル',
    content: '記事本文',
    createdDate: new Date,
    lastUpdatedDate: new Date,
  };
  return (
    <main>
      <article>
        <div>{post.title}</div>
        <div>
          <span>update: {format(post.lastUpdatedDate, 'yyyy-MM-dd')}, </span><span>posted: {format(post.createdDate, 'yyyy-MM-dd')}</span>
        </div>
        <div>{post.content}</div>
      </article>
    </main>
  );
};
