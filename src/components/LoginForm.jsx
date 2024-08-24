import React, { useState } from "react";
import classes from "../styles/Form.module.css";
import textInputClasses from "../styles/TextInput.module.css";
import TextInput from "./TextInput";
import Button from "./Button";
import buttonClasses from "../styles/Button.module.css";
import Form from "./Form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const LoginForm = () => {
  const { userName, signIn, error } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(data.email, data.password);
  };

  return (
    <Form
      className={`${classes.login} ${classes.form}`}
      handleSubmit={handleSubmit}
    >
      <TextInput
        className={textInputClasses.textInput}
        type="text"
        placeholder="Enter your username or email"
        iconClassName="material-icons-outlined"
        value={data.email}
        name="email"
        handleChange={handleChange}
      />
      <TextInput
        className={textInputClasses.textInput}
        type="password"
        placeholder="Enter your password"
        iconClassName="material-icons-outlined"
        value={data.password}
        name="password"
        handleChange={handleChange}
      />
      {error && <p>{error}</p>}
      <Button className={buttonClasses.button} type="submit">
        <span>Login</span>
      </Button>
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
