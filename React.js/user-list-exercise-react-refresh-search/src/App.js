import React, { Fragment, useState } from "react";

import { Header } from "./components/Header/Header";

import { Footer } from "./components/Footer/Footer";

import { UserList } from "./components/UserList/UserList";


function App() {
  const [isListView, setIsListView] = useState(true);
  console.log("App: ", isListView);
  const onLayoutChange = () => setIsListView(!isListView);
  return (
    <Fragment>
      <Header isListView={isListView} onLayoutChange={onLayoutChange} />
      <UserList isListView={isListView} />
      <Footer />
    </Fragment>
  );
}

export default App;