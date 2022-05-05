import { h, FunctionComponent } from 'preact';

type IndexPageProps = {
	title: string,
};

export const IndexPage: FunctionComponent<IndexPageProps> = (props: IndexPageProps) => {
	return <h1>Hello World</h1>;
};