import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import MainComponent from "./components.js/MainComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
