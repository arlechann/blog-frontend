import { FunctionComponent } from 'preact';
import { format } from 'date-fns';
import { Post } from '../models/post';

type PostProps = {
  post: Post;
};

export const PostDetail: FunctionComponent<PostProps> = (props: PostProps) => {
  return (
    <article>
      <header>
        <h1>{props.post.title}</h1>
        <section>
          Updated: <time>{format(props.post.lastUpdatedDate, 'yyyy-MM-dd')}</time>,
          Posted: <time>{format(props.post.createdDate, 'yyyy-MM-dd')}</time>
        </section>
      </header>
      <section>
        {props.post.content}
      </section>
    </article>
  );
};
