import React, { useState } from "react";

const HomePage = ({ items, setItems }) => {
  const totalTasks = items.length;
  const completedTasks = items.filter((item) => item.completed).length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  // Function to toggle task completion
  const toggleComplete = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems); // Update the state with the modified items
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Task Overview</h1>
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>

      {/* Progress bar */}
      <div style={styles.progressContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      </div>
      <p>{progress}% completed</p>

      {/* List all tasks */}
      <ul style={styles.taskList}>
        {items.map((item) => (
          <li key={item.id} style={styles.taskItem}>
            <div style={styles.taskInfo}>
              {/* Checkbox to mark as completed */}
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)} // Mark task as completed
                style={styles.checkbox}
              />
              <span style={item.completed ? styles.completedTask : styles.task}>
                {item.name}{" "}
                {item.important && (
                  <strong style={styles.important}>(Important)</strong>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    textDecoration: "none", // Ensure no underline on heading
  },
  progressContainer: {
    height: "20px",
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#28a745",
    borderRadius: "10px",
  },
  taskList: {
    listStyleType: "none",
    paddingLeft: 0,
    marginTop: "20px",
  },
  taskItem: {
    padding: "10px 15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  taskInfo: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "15px",
  },
  task: {
    fontSize: "16px",
    textDecoration: "none", // Ensure no underline on task text
    color: "#333",
    transition: "all 0.3s ease", // Add a transition to animate when completed
  },
  completedTask: {
    fontSize: "16px",
    textDecoration: "line-through",
    color: "#777",
    opacity: 0.6, // Make the completed task a bit faded
    transition: "all 0.3s ease", // Smooth animation for the change
  },
  important: {
    color: "#d9534f",
    fontWeight: "bold",
    marginLeft: "10px",
  },
};

export default HomePage;
