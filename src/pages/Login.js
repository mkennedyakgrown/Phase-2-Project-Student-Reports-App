import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
    const login = useOutletContext();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleLogin(e) {
        e.preventDefault();
        login();
    };

    return (
        <form onSubmit={handleLogin}>
            <label for="email">Email</label>
            <div>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <label for="password">Password</label>
            <div>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;