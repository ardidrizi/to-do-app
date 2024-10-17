import { useParams, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TaskDetails = ({ items }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const task = items.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div style={styles.detailsContainer}>
      <h2>Task Details</h2>
      <p>
        <strong>Task Name:</strong> {task.name}
      </p>
      <p>
        <strong>Important:</strong> {task.important ? "Yes" : "No"}
      </p>
      <p>
        <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
      </p>

      <button onClick={() => navigate("/")} style={styles.button}>
        Back to Tasks
      </button>
    </div>
  );
};

const styles = {
  detailsContainer: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "20px auto",
  },
  button: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default TaskDetails;
