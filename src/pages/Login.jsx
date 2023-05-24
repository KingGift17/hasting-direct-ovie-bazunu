import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";
import "../css/Login.css";

function Login() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    if (
      password.match(
        /^(?!.*[/'"\s])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/g
      )
    ) {
      console.log("pass");
      setIsInvalid(false);
      navigate("/dashboard");
    } else if (password.length > 10 ** 9) {
      console.log("fail");
      setIsInvalid(true);
    } else {
      console.log("fail");
      setIsInvalid(true);
    }
  };

  function Invalid() {
    setIsInvalid(!isInvalid);
  }

  return (
    <>
      <section className="background">
        <div className="card-container">
          <div className="card">
            <h1>MyAccount</h1>
            <p>
              Enter the email address linked with the policy to register or
              login.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter a username"
                  className="input-box"
                ></input>
                <input
                  className="input-box"
                  value={password}
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                ></input>
                <div
                  className="Visibility-Icon"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <EyeFilled /> : <EyeInvisibleFilled />}{" "}
                  {/* ternary statement */}
                </div>
              </div>
              <button onClick={Invalid} type="submit">
                Continue
              </button>
              {isInvalid ? (
                <div className="error-message">Invalid password, try again</div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
