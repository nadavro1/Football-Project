import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import Teams from './components/Teams'
import TeamPage from './components/TeamPage'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/'>
             <Redirect to="/teams" />
          </Route>
          <Route exact path='/teams' component={Teams}/>
          <Route exact path='/teams/:id' component={TeamPage}/>
        </div>
      </Router>
    </Provider>     
  );
}

export default App;
