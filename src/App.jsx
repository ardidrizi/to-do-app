import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateItemForm from "./components/CreateItemForm";
import ItemList from "./components/ItemList";

function App() {
  // State to manage the list of tasks
  const [items, setItems] = useState([]);

  // Function to add a new task to the list
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, completed: false }]); // Add task with 'completed' set to false
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Function to delete a task from the list
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar />

      <div className="content">
        <CreateItemForm addItem={addItem} />
        <ItemList
          items={items}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
