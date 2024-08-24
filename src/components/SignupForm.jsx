import React, { useState } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import buttonClasses from "../styles/Button.module.css";
import Checkbox from "./Checkbox";
import TextInputClasses from "../styles/TextInput.module.css";
import classes from "../styles/Form.module.css";
import Home from '../pages/Home'
import {useAuth} from '../context/authContext'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebase } from "../firebase";
import { Link } from "react-router-dom";

const signupForm = () => {
  const {signUp,error} = useAuth();
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    const { userName, email, password } = input;
    event.preventDefault();
    await signUp(email,password,userName);
  };
  return (
    <Form
      className={`${classes.signup} ${classes.form}`}
      handleSubmit={handleSubmit}
    >
      <TextInput
        className={TextInputClasses.textInput}
        type="text"
        placeholder="Enter your name"
        iconClassName="material-icons-outlined"
        value={input.userName}
        name="userName"
        handleChange={handleChange}
      />
      <TextInput
        className={TextInputClasses.textInput}
        type="email"
        placeholder="Enter your email"
        iconClassName="material-icons-outlined"
        value={input.email}
        name="email"
        handleChange={handleChange}
      />
      <TextInput
        className={TextInputClasses.textInput}
        type="password"
        placeholder="Enter your password"
        iconClassName="material-icons-outlined"
        value={input.password}
        name="password"
        handleChange={handleChange}
      />
      <TextInput
        className={TextInputClasses.textInput}
        type="password"
        placeholder="Enter your confirm password"
        iconClassName="material-icons-outlined"
        value={input.confirmPassword}
        name="confirmPassword"
        handleChange={handleChange}
      />
      <Checkbox text="I agree to the Terms & Conditions" />
      {error && <p>{error}</p>}
      <Button className={buttonClasses.button} type="submit">
        <span>Submit now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default signupForm;
