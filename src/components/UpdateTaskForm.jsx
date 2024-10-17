import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTaskForm = ({ items, updateItem }) => {
  const { id } = useParams(); // Get the task ID from the URL
  const navigate = useNavigate();

  const task = items.find((item) => item.id === Number(id));

  // Local state to manage form input
  const [name, setName] = useState("");
  const [important, setImportant] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Populate form with existing task data
  useEffect(() => {
    if (task) {
      setName(task.name);
      setImportant(task.important);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      name,
      important,
      completed,
    };
    updateItem(updatedTask); // Call the function to update the task in the state
    navigate("/"); // Redirect to the home page after updating
  };

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div style={styles.formContainer}>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Task Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            />
            Important
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Update Task
        </button>
      </form>
    </div>
  );
};

// Styling for the form
const styles = {
  formContainer: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default UpdateTaskForm;
