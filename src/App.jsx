import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateItemForm from "./components/CreateItemForm";
import HomePage from "./components/HomePage"; // Import HomePage
import UpdateTaskForm from "./components/UpdateTaskForm"; // Import UpdateTaskForm

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Buy groceries", important: true, completed: false },
    { id: 2, name: "Finish homework", important: false, completed: true },
    {
      id: 3,
      name: "Schedule dentist appointment",
      important: false,
      completed: false,
    },
    { id: 4, name: "Workout at the gym", important: true, completed: false },
    { id: 5, name: "Prepare dinner", important: false, completed: true },
  ]);

  const addItem = (newItem) => {
    setItems([...items, { ...newItem, completed: false }]);
  };

  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<HomePage items={items} setItems={setItems} />}
            />
            <Route
              path="/create"
              element={
                <div>
                  <CreateItemForm addItem={addItem} />
                </div>
              }
            />
            <Route
              path="/update/:id"
              element={<UpdateTaskForm items={items} setItems={setItems} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
