import React from "react";

const ItemList = ({ items, toggleComplete, deleteItem }) => {
  return (
    <ul style={styles.ul}>
      {items.map((item) => (
        <li key={item.id} style={styles.li}>
          {/* Checkbox to mark as completed */}
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(item.id)} // Toggle task completion
            style={styles.checkbox}
          />
          <span style={item.completed ? styles.completed : styles.task}>
            {item.name}{" "}
            {item.important && (
              <strong style={styles.important}>(Important)</strong>
            )}
          </span>

          {/* Delete button */}
          <button onClick={() => deleteItem(item.id)} style={styles.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// Basic styles for the task list with enhanced UI
const styles = {
  ul: {
    listStyleType: "none",
    paddingLeft: 0,
    marginTop: "20px",
  },
  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
  liHover: {
    backgroundColor: "#f0f0f0",
  },
  checkbox: {
    marginRight: "15px",
  },
  task: {
    flex: 1,
    fontSize: "16px",
  },
  completed: {
    flex: 1,
    fontSize: "16px",
    textDecoration: "line-through",
    color: "#777",
  },
  important: {
    color: "#d9534f",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  button: {
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#c9302c",
  },
};

export default ItemList;
