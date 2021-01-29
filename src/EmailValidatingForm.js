import React, { useReducer, useRef, useState } from "react";
import useInterval from "./useInterval";

function EmailValidatingForm() {
  const emailRef = useRef(null);

  function validateEmail() {
    return emailRef.current.validity.valid;
  }

  const [emailValid, setEmailValid] = useState(false);

  function emailReducer(state, action) {
    const isValidEmail = validateEmail();
    setEmailValid(isValidEmail);
    return action;
  }

  const [email, setEmail] = useReducer(emailReducer, "");
  const maxSeconds = 30;
  const [count, setCount] = useState(maxSeconds);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  return (
    <div className="container">
      <br />
      <div>
        <div className="content">
          <input
            onChange={(e) => setEmail(e.target.value)}
            disabled={count <= 0}
            value={email}
            ref={emailRef}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          &nbsp;&nbsp;&nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => {
              setCount(0);
              alert(`button clicked with email ${email}`);
            }}
            className="btn-lg"
            type="submit"
          >
            PRESS ME!
          </button>
          <div>
            {count > 0
              ? `You Have ${count} Seconds To Enter Your Email`
              : "Email Entered or Time Expired"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailValidatingForm;
