import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { format, parse } from 'date-fns';
import { PageProps } from '../types/page';
import { Post } from '../types/post';
import { config } from '../config';

type PostPageProps = PageProps & {
  slug: string;
};

export const PostPage: FunctionComponent<PostPageProps> = (props: PostPageProps) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(config.API_URL + `/posts/${props.slug}`, {
      method: 'GET',
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
        setPost({
          slug: json.slug,
          title: json.title,
          content: json.content,
          createdDate: parse(json.created_at, 'yyyy-MM-dd HH:mm:ss XXXX', Date.now()),
          lastUpdatedDate: parse(json.last_updated_at, 'yyyy-MM-dd HH:mm:ss XXXX', Date.now()),
        });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      {
        post == null
          ? ''
          :
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
      }
    </main>
  );
};
