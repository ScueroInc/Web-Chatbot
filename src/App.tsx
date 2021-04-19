import "./sass/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRouter } from "./core/Router/Router";

function App() {

  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
