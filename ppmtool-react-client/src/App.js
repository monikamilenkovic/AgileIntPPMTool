import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux"; //sluzi za spajanje react-a i redux-a, provider je ono kako definisemo Store i sve se okruzi sa <Provider> tagom
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";

function App() {
  return (
    ////na putanji dashboard ucitava Dashboard komponentu (Route je parent od Dashboard) sto znaci da Route moze da prosledi props do Dashboard
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
