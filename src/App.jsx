import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateItemForm from "./components/CreateItemForm";
import ItemList from "./components/ItemList";
import TaskDetails from "./components/TaskDetails";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage"; // Import the ErrorPage
import UpdateTaskForm from "./components/UpdateTaskForm"; // Import the UpdateTaskForm

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

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Function to update the task
  const updateItem = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage items={items} />} />
            <Route
              path="/create"
              element={
                <div>
                  <CreateItemForm addItem={addItem} />
                  <ItemList
                    items={items}
                    toggleComplete={toggleComplete}
                    deleteItem={deleteItem}
                  />
                </div>
              }
            />
            <Route path="/task/:id" element={<TaskDetails items={items} />} />

            {/* Update Task Page */}
            <Route
              path="/update/:id"
              element={<UpdateTaskForm items={items} updateItem={updateItem} />}
            />

            {/* Error Page */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
