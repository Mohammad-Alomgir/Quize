import React from "react";
const Form = ({handleSubmit,className,children}) => {
  return (
    <>
      {/* Form component */}
      <form className={className} onSubmit={handleSubmit}>
       {children}
      </form>
    </>
  );
};

export default Form;
