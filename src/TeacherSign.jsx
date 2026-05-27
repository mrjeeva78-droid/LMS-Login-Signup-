import React, { useState } from "react";

export default function LoginSystem() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Register user
  const handleRegister = (e) => {
    e.preventDefault();

    const userExists = users.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      setMessage("User already exists!");
      return;
    }

    setUsers([...users, formData]);

    setMessage("Registration successful!");
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setIsLogin(true);
  };

  // Login user
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (user) {
      setLoggedInUser(user);
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password!");
    }
  };

  // Logout
  const handleLogout = () => {
    setLoggedInUser(null);
    setMessage("Logged out!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {message && <p>{message}</p>}

        {loggedInUser ? (
          <div>
            <h3>Welcome, {loggedInUser.name}</h3>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </div>
        ) : (
          <form
            onSubmit={isLogin ? handleLogin : handleRegister}
          >
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        )}

        {!loggedInUser && (
          <p
            style={styles.toggle}
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f4f4",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toggle: {
    marginTop: "15px",
    color: "blue",
    cursor: "pointer",
  },
};