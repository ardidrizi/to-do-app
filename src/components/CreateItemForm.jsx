import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CreateItemForm = ({ addItem }) => {
  // Local state to store task name and checkbox state
  const [task, setTask] = useState("");
  const [isImportant, setIsImportant] = useState(false); // State to track checkbox status

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Add new task with a unique ID and checkbox status
      addItem({ id: Date.now(), name: task, important: isImportant });
      setTask(""); // Clear input field
      setIsImportant(false); // Reset checkbox state
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* Task input field */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update task state
        placeholder="Add a new task"
        style={styles.input}
      />

      {/* Checkbox to mark task as important */}
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isImportant}
          onChange={(e) => setIsImportant(e.target.checked)} // Update checkbox state
        />
        Important
      </label>

      {/* Submit button */}
      <button type="submit" style={styles.button}>
        Add Task
      </button>
    </form>
  );
};

// Basic styles for the form
const styles = {
  form: {
    marginBottom: "20px",
    textAlign: "center",
    padding: "20px",
  },
  input: {
    padding: "10px",
    width: "300px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  label: {
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CreateItemForm;
