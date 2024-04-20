import { MdEmail } from "react-icons/md";
import "./signup.css";
import { FaLock } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
// import React, { useState } from "react";
function Signup() {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, email, password };
      await fetch("http://localhost:5434/user/create", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log("Hurray! Data sent sucessfully");
      window.location.href = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <form className="container" onSubmit={onSubmitForm}>
        <div className="header">
          <div className="text">Sign Up</div>

          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <RiAccountCircleFill color=" #797979" className="icon icon-size" />
            <input
              type="text"
              placeholder="Name"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="input">
            <MdEmail color=" #797979" className="icon icon-size" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input">
            <FaLock color=" #797979" className="icon" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>

        <div className="submit-container">
          <button className="submit" onClick={onSubmitForm}>Sign Up</button>
        </div>

        <div className="login-here">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span>Login Here!</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Signup;
