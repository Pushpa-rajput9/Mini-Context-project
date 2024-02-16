import { useState, useContext } from "react";
import UserContext from "../Context/Context";
//import UserContextProvider from "../Context/ContextProvider";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };
  return (
    <div>
      <h1 className="mb-8">Login</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button className="mb-4" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
