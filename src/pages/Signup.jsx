import React from "react";
import Illustration from '../components/Illustration';
import Column from "../components/Column";
import SignupForm from "../components/SignupForm";
import illustrationImage from '../assets/images/signup.svg';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <Column>
        <Illustration illustrationImage={illustrationImage}/>
        <SignupForm />
      </Column>
    </>
  );
};

export default Signup;
