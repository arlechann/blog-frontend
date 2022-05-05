import { render } from 'preact';

import { IndexPage } from './components/pages';

const root = document.getElementById('app');
if (root == null) { throw new Error; }

render(<IndexPage title="Index Page" />, root);