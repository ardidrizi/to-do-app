const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My To-Do App</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333", // Dark background color
    color: "#fff", // White text color
    textAlign: "center", // Center the text
    padding: "10px", // Padding around the footer
    position: "fixed", // Fix the footer to the bottom
    bottom: 0, // Position at the very bottom
    width: "100%", // Full width
  },
};

export default Footer;
