import { Fragment } from "react";

import Header from "./components/Header/Header";
import { BlogList} from "./components/BlogList/BlogList"

function App() {
  return (
    <Fragment>
      <Header />
      <BlogList />
    </Fragment>
  );
}

export default App;
