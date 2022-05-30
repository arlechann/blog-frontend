import { FunctionComponent, render } from 'preact';
import { Route, Router } from 'preact-router';

import { Header } from './components/header';
import { IndexPage } from './pages';
import { PostListPage } from './pages/post-list';
import { PostDetailPage } from './pages/post-detail';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Router>
        <Route path='/' component={IndexPage} />
        <Route path='/posts' component={PostListPage} />
        <Route path='/posts/:slug+' component={PostDetailPage} />
        <div default><h1>404 Not Found</h1></div>
      </Router>
    </>
  );
};

const root = document.getElementById('app');
if (root == null) { throw new Error; }

render(<App />, root);