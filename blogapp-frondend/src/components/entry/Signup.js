import React, { useState, useEffect } from "react";
import Login from "./Login";
import "./Signup.css";
import validation from "./validation";

const Signup = (props) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    retype: "",
  });
  const [FormErrorValues, setFormErrorValues] = useState({});
  const [Issubmit, setIssubmit] = useState(false);
  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target; //destructuring
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrorValues(validation(formValues));
    setIssubmit(true);
  };
  useEffect(() => {
    if (Object.keys(FormErrorValues).length === 0 && Issubmit) {
      alert("success");
    }
  }, [FormErrorValues]);

  return (
    <div>
      {Object.keys(FormErrorValues).length === 0 && Issubmit ? (
        <Login />
      ) : (
        <pre></pre>
      )}
      <br></br>
      <br></br>
      <br></br>

      <div className="signup">
        <form onSubmit={handleSubmit} method="post">
          <h1>Sign Up</h1>
          <input
            type="text"
            name="username"
            placeholder="User name"
            required=""
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{FormErrorValues.username}</p>
          <input
            type="email"
            name="email"
            placeholder="mail"
            required=""
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{FormErrorValues.email}</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{FormErrorValues.password}</p>
          <input
            type="password"
            name="retype"
            placeholder="Retype Password"
            required=""
            value={formValues.retype}
            onChange={handleChange}
          />
          <p>{FormErrorValues.retype}</p>
          <button onClick={validation}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
