import { Link } from "react-router-dom";

const ItemList = ({ items, toggleComplete, deleteItem }) => {
  return (
    <ul style={styles.ul}>
      {items.map((item) => (
        <li key={item.id} style={styles.li}>
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

          {/* Edit button links to the update form */}
          <Link to={`/update/${item.id}`} style={styles.editLink}>
            <button style={styles.editButton}>Edit</button>
          </Link>

          {/* Delete button */}
          <button onClick={() => deleteItem(item.id)} style={styles.button}>
            Delete
          </button>
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
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  checkbox: {
    marginRight: "15px",
  },
  task: {
    fontSize: "16px",
  },
  completedTask: {
    fontSize: "16px",
    textDecoration: "line-through",
    color: "#777",
  },
  important: {
    color: "#d9534f",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  editLink: {
    marginRight: "10px",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
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
