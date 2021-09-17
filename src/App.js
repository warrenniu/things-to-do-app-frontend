import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import List from "./pages/List";
import Home from "./pages/Home";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todolist" component={List} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
