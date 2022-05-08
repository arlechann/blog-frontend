import { FunctionComponent, render } from 'preact';
import Router from 'preact-router';

import { Header } from './components/header';
import { IndexPage } from './pages';
import { PostListPage } from './pages/post-list';

const root = document.getElementById('app');
if (root == null) { throw new Error; }

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Router>
        <IndexPage path='/' />
        <PostListPage path='/posts' />
        <div default><h1>404 Not Found</h1></div>
      </Router>
    </>
  );
};

render(<App />, root);