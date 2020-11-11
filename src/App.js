import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import "../src/mock/mock";
// import FirstPage from "./components/FirstPage";
import "./App.less";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
        {/* <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <route path="/" component={Home} />
          </Switch>
        </Suspense> */}
      </HashRouter>
    </div>
  );
}

export default App;
