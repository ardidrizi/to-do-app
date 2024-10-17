import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ items, toggleComplete, deleteItem }) => {
  return (
    <ul style={styles.ul}>
      {items.map((item) => (
        <li key={item.id} style={styles.li}>
          <div style={styles.taskInfo}>
            {/* Checkbox to mark as completed */}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
              style={styles.checkbox}
            />
            <span style={item.completed ? styles.completedTask : styles.task}>
              {item.name}{" "}
              {item.important && (
                <strong style={styles.important}>(Important)</strong>
              )}
            </span>
          </div>

          {/* Buttons (Edit and Delete) positioned next to each other */}
          <div style={styles.buttonsContainer}>
            <Link to={`/update/${item.id}`} style={styles.editLink}>
              <button style={styles.editButton}>Edit</button>
            </Link>

            <button onClick={() => deleteItem(item.id)} style={styles.button}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Styles for the task list
const styles = {
  ul: {
    listStyleType: "none",
    paddingLeft: 0,
    marginTop: "20px",
  },
  li: {
    display: "flex",
    justifyContent: "space-between", // Ensure the task name and buttons are spaced properly
    alignItems: "center",
    padding: "10px 15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  taskInfo: {
    display: "flex",
    alignItems: "center",
    flex: 1, // Ensure this takes up available space
  },
  checkbox: {
    marginRight: "15px",
  },
  task: {
    fontSize: "16px",
    flex: 1, // Allow task name to take up available space
  },
  completedTask: {
    fontSize: "16px",
    textDecoration: "line-through",
    color: "#777",
    flex: 1, // Allow completed task name to take up available space
  },
  important: {
    color: "#d9534f",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  buttonsContainer: {
    display: "flex", // Align buttons horizontally
    gap: "10px", // Add space between buttons
  },
  editLink: {
    marginRight: "10px",
    textDecoration: "none",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ItemList;
