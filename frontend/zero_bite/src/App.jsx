import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import CreateFood from "./pages/CreateFood";
import FoodFeed from "./pages/FoodFeed";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} />}
        />

        <Route
          path="/login"
          element={<Login darkMode={darkMode} />}
        />

        <Route
          path="/register"
          element={<Register darkMode={darkMode} />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard darkMode={darkMode} />}
        />

        <Route
          path="/create-food"
          element={<CreateFood darkMode={darkMode} />}
        />

        <Route
          path="/food-feed"
          element={<FoodFeed darkMode={darkMode} />}
        />
      </Routes>
    </>
  );
}

export default App;