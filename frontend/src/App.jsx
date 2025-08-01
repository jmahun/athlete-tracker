import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Login from "./components/login";
import Registration from './components/registration';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Registration</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact="true" path ="/" element={<Login />} >
          </Route>
          <Route path="/signup" element={<Registration />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
