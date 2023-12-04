import React, { useState } from "react";

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
  const emailIsValid = didEdit.email && !enteredInput.email.includes("@");

  //code for validating password with at least 8 characters long, no spaces, at least one uppercase letter, one lowercase letter, one number and one special character
  //const passwordIsValid = 

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredInput.email}
          />
        </div>
        <div className="control-error">
          {emailIsValid && <p>Please enter a valid email address.</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onBlur={() => handleInputBlur("password")}
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredInput.password}
          />
        </div>
        <div className="control-error">
          {passwordIsValid && (
            <p>
              password with at least 8 characters long, no spaces, at least 1
              uppercase letter, 1 lowercase letter, 1 number and 1 special
              character
            </p>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
