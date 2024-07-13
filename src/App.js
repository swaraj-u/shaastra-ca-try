import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
