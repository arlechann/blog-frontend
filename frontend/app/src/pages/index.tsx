import { FunctionComponent } from 'preact';
import { PageProps } from '../types/page';
import { PostListPage } from './post-list';

type IndexPageProps = PageProps;

export const IndexPage: FunctionComponent<IndexPageProps> = (props: IndexPageProps) => {
  return <PostListPage {...props} />;
};