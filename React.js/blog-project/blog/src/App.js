import { Fragment } from 'react';

import { Header } from './components/Header/Header.js';
import { BlogList } from './components/BlogList/BlogList.js';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

export default App;