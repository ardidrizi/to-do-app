const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My To-Do App</p>
    </footer>
  );
};

const styles = {
  footer: {
    position: "fixed", // Fix the footer to the bottom of the viewport
    bottom: 0,
    left: 0,
    width: "100%", // Full width
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparent dark background
    color: "#fff", // White text color for contrast
    textAlign: "center",
    padding: "10px",
    backdropFilter: "blur(10px)", // Add blur for modern, frosted glass effect
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.5)", // Subtle shadow above the footer
  },
};

export default Footer;
