import React from 'react';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path = "/"> This is avengers house</Route>
      <Route exact path = "/starred"> I am steve rogus</Route>
      <Route>Oops,this is 404 error</Route>
    </Switch>
    
  );
}

export default App;
