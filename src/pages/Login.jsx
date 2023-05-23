import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    if (
      password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*^[^'/"])[A-Za-z\d@$!%*?&]{8,}/g
      )
    ) {
      // alert("Login Successfully");
      console.log("pass");
      // navigate("/dashboard");
    } else {
      console.log("fail");
      // alert("You have entered password or username incorrectly.");
    }
  };

  return (
    <div className="Login">
      <div className="Auth-Form-Container">
        <h2 className="title">Login</h2>
        <form className="Login-Form" onSubmit={handleSubmit}>
          <label htmlfor="username">Username: </label>
          <input
            className="Input-Button"
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
          ></input>

          <label htmlfor="password">Password: </label>
          <input
            className="Input-Button"
            value={password}
            type={visible ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          ></input>
          <div className="Visibility-Icon" onClick={() => setVisible(!visible)}>
            {visible ? <EyeFilled /> : <EyeInvisibleFilled />}{" "}
            {/* ternary statement */}
          </div>

          <button className="enter-btn Button-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
