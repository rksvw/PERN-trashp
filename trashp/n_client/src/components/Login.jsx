import { MdEmail } from "react-icons/md";
import "./login.css";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleCheck = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const res = await fetch("http://localhost:5434/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const isOkay = res.status === 200;
      if (isOkay) {
        window.location.href = "/";
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleCheck}>
        <div className="header">
          <div className="text">Login</div>

          <div className="underline"></div>
        </div>

        <div className="inputs">
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
          <div className="submit" onClick={handleCheck}>
            Login
          </div>
        </div>
        <div className="signup-here">
          Don&apos;t have an account?{" "}
          <Link to={"/signup"}>
            <span>Sign Up Here!</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
