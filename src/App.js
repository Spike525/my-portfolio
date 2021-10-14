import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AllProjectsPage from "./Pages/AllProjectsPage/AllProjectsPage";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={AllProjectsPage} path="/projects" />
        <Route component={AboutPage} path="/about" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
