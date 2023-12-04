import React, { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredInput, setEnteredInput] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  //code for validating email
  const emailIsValid = didEdit.email && !isEmail(enteredInput.email) && !isNotEmpty(enteredInput.email);

  //code for validating password with at least 8 characters long, no spaces, at least one uppercase letter, one lowercase letter, one number and one special character
  const passwordIsValid = didEdit.password && !hasMinLength(enteredInput.password, 6) && !isNotEmpty(enteredInput.password);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredInput);
  }

  // function handleEmailChange(e) {
  //   setEnteredEmail(e.target.value);
  // }
  // function handlePasswordChange(e) {
  //   setEnteredPassword(e.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEnteredInput((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredInput.email}
          error={emailIsValid && "Please enter a valid email address"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredInput.password}
          error={passwordIsValid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
