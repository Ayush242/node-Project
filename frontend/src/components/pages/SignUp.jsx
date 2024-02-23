import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../style/form.css";

const SignUp = () => {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/register", {
        username,
        phone,
        email,
        password,
      })
      .then((res) => {
        alert("User signed up", res);
        history("/signin"); // Redirect to login after successful registration to generate the JWT from there
      })
      .catch((e) => {
        alert("Error Signing user", e);
      });
  };

  return (
    <div
      className="form--box d-flex  align-items-center justify-content-center  custom_bg"
      style={{ height: "100vh" }}
    >
      <div className="con_width  bg_white">
        <h2>Registration Form</h2>
        <br />

        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              value={phone}
              className="form-control"
              placeholder="Enter your phone number"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </form>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-lg mx-3"
          onClick={(event) => registerUser(event)}
        />
        <div className="text-center py-3">
          <br />
          <br />
          <div className="text-center h6 text-muted">
            Already have an account?{" "}
            <Link to={{ pathname: "/signin" }}>Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
