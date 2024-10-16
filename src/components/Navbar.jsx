const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1>My To-Do App</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333", // Dark background color
    color: "#fff", // White text color
    padding: "10px", // Padding around the navbar
    textAlign: "center", // Center the content
    fontSize: "24px", // Adjust font size
  },
};

export default Navbar;
