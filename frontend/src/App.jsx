import Routelist from "./pages/Routelist";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage todos={todos} setTodos={setTodos} />}
        />
        <Route
          path="/List"
          element={<Routelist todos={todos} setTodos={setTodos} />}
        >
          {" "}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
