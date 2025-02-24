import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import BasePages from "./pages/user/BasePages";


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ola" element={<BasePages/>} />
        </Routes>
      </Router>
  );
}

export default App;