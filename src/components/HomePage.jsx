import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = ({ items }) => {
  const totalTasks = items.length;
  const completedTasks = items.filter((item) => item.completed).length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div style={styles.container}>
      <h1>Task Overview</h1>
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
          <Link key={item.id} to={`/task/${item.id}`}>
            <li style={styles.taskItem}>
              <span style={item.completed ? styles.completedTask : styles.task}>
                {item.name}{" "}
                {item.important && (
                  <strong style={styles.important}>(Important)</strong>
                )}
              </span>
            </li>
          </Link>
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
  task: {
    fontSize: "16px",
    textDecoration: "none", // Ensure no underline for active tasks
    color: "#333", // Default text color for tasks
  },
  completedTask: {
    fontSize: "16px",
    textDecoration: "line-through", // Keep line-through for completed tasks
    color: "#777",
  },
  important: {
    color: "#d9534f",
    fontWeight: "bold",
    marginLeft: "10px",
  },
};

export default HomePage;
