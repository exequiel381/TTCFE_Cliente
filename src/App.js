import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
} from "react-router-dom";
import "./App.css";
import Cliente from "./pages/cliente/cliente";

function App() {
  return (
    <Cliente />
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Cliente />}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
