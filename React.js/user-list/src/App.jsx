import {Fragment} from 'react';
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {UserList} from './components/userlist/UserList'



function App() {
  return (
    <Fragment>
      <Header />
      
      <UserList />
      <Footer />      
    </Fragment>
  );
}

export default App;
