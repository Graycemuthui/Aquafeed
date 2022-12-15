import "./App.css";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Orders from "./components/Orders/Orders";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <main className="content">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;
