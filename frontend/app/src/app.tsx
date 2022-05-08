import { FunctionComponent, render } from 'preact';
import Router from 'preact-router';

import { IndexPage } from './pages';

const root = document.getElementById('app');
if (root == null) { throw new Error; }

const App: FunctionComponent = () => {
  return (
    <Router>
      <IndexPage path='/' />
    </Router>
  );
};

render(<App />, root);