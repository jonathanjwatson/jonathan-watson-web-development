import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";

import NavBar from "./components/NavBar/NavBar";
import Connect from "./containers/Connect/Connect";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/connect" component={Connect} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
