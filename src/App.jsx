import React, { useRef } from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  }); //input types
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:"Usernames should be 3-16 characters and shouldn't contain special character and spaces",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage:"Must be an email address",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage:"Must be a valid date",
      required:false
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern:"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,20}$"
      ,
      errorMessage:"Password should be 8-20 characters and include at least 8 letter,1 number and a special character",
      required:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: values.password,
      errorMessage:"Passwords don't match!",
      required:true
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function onChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return (
    <div className="app">
      <h3 id="register">Register</h3>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </form>
      <button>Submit</button>
    </div>
  );
}

export default App;
