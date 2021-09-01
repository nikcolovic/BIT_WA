import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

const  App =(props) =>{

    return (
     
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
            </Switch> 
     
      
    );
  }


export default App;
