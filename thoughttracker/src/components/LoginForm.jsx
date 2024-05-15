import { useState } from "react";
import axios from "axios";


const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success,setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            
            const response = await axios.post("http://localhost:8080/users/login", {
              username,
              password
            });

            if (response.status === 200 ) {
                setSuccess("Login Good To Go ")
              onLogin();
              
            } else {
              setError("Invalid username or password");
              
            }
          } catch (error) {
            console.error("Error logging in:", error);
            setError("An error occurred while logging in");
          }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            {success && <div>{success}</div>}
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username.trim()}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password.trim()}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;