import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App max-w-[1440px] mx-auto">
        <Main />
      </div>
    </Router>
  );
}

export default App;
