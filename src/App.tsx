import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import BasePages from "./pages/user/BasePages";
import PaidUser from "./pages/user/PaidUser/PaidUser";


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ola" element={<BasePages/>} />
        <Route path="/paidUser" element={<PaidUser/>} />
        </Routes>
      </Router>
  );
}

export default App;