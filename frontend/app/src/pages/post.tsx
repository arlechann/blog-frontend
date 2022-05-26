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
        <header>
          <h1>{post.title}</h1>
          <section>
            Updated: <time>{format(post.lastUpdatedDate, 'yyyy-MM-dd')}</time>,
            Posted: <time>{format(post.createdDate, 'yyyy-MM-dd')}</time>
          </section>
        </header>
        <section>
          {post.content}
        </section>
      </article>
    </main>
  );
};
