import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  const styles = {
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "14px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "16px"
  },
  icon: {
    position: "absolute",
    right: "10px",
    top: "40%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "18px",
    color: "grey",
  },
};

  return (
    <div style={styles.container}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        style={styles.input}
      />
      <span onClick={togglePassword} style={styles.icon}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default PasswordInput;
