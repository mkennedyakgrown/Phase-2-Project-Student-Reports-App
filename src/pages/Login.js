import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const context = useOutletContext();
  const [formData, setFormData] = useState({
    email: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    const isUser = context.login(formData.email);
    if (isUser === false) {
      console.log("User not found");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <div>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
