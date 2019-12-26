import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/post/Post';
import Edit from './components/post/Edit';
import Create from './components/post/Create';


function App(): JSX.Element {

  return (
    <div className="App">
    <Navbar />
      <div className={'container'}>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/post/:postId"} component={Post}/>
          <Route path={"/edit/:postId"} component={Edit}/>
          <Route path={"/create"} component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
