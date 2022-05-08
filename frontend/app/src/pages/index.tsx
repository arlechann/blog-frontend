import { FunctionComponent } from 'preact';
import { PageProps } from '../types/page';

type IndexPageProps = PageProps;

export const IndexPage: FunctionComponent<IndexPageProps> = (props: IndexPageProps) => {
  return <h1>Hello World</h1>;
};