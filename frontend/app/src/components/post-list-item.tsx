import { FunctionComponent } from "preact";
import { marked } from 'marked';
import { Post, summarize } from "../models/post";
import { format } from "date-fns";

type PostListItemProps = {
  post: Post
};

export const PostListItem: FunctionComponent<PostListItemProps> = ({ post }: PostListItemProps) => {
  const summarizedContentHTML = marked.parse(summarize(post.content), { gfm: true });

  return (
    <li>
      <article>
        <header>
          <a href={`/posts/${post.slug}`}><h1>{post.title}</h1></a>
          <section>
            Updated: <time>{format(post.lastUpdatedDate, 'yyyy-MM-dd')}</time>,
            Posted: <time>{format(post.createdDate, 'yyyy-MM-dd')}</time>
          </section>
        </header>
        <section dangerouslySetInnerHTML={{ __html: summarizedContentHTML }}>
        </section>
        <footer>
          <a href={`/posts/${post.slug}`}>続きを読む</a>
        </footer>
      </article>
    </li>
  );
};