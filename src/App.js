
import './App.css';
import Search from './components/Search'
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Details from './components/Details'
function App() {
  return (
    <div className="App">
      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/details/:id"  render={(props) => <Details {...props} />} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
