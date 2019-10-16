import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './routes/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
