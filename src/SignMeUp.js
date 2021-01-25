import React, { useEffect, useState, useRef, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ConfigContext } from "./App";

const SignMeUp = ({ signupCallback }) => {
  useEffect(() => {
    console.log("SignMeUp:useEffect called");
  });

  const emailRef = useRef(null);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  const context = useContext(ConfigContext);

  function validateEmail() {
    return emailRef.current.validity.valid;
  }

  function notify() {
    toast.info(`You will be notified of upcoming events ${email}`);
  }

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise((resolve) => {
      setTimeout(() => {
        setSendProcessing(false);
        setEmail("");
        resolve();
      }, 1000);
    }).then(() => {
      notify();
      signupCallback(email);
      setEmail("");
    });
  }

  const buttonText = sendProcessing ? "processing..." : "Get Updates";

  return context.showSignMeUp === false ? null : (
    <div className="container">
      <div>
        <ToastContainer />
        <form
          className="content"
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmailValid(validateEmail(e.target.value));
              return setEmail(e.target.value);
            }}
            ref={emailRef}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          &nbsp;
          <button
            disabled={!emailValid || sendProcessing}
            className="btn"
            onClick={sendEmailToBackend}
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignMeUp;
