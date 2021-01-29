import { useReducer, useRef, useState } from "react";
import useInterval from "./useInterval";

function useEmailValidation(seconds) {
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
  const maxSeconds = seconds;
  const [count, setCount] = useState(maxSeconds);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  const retObject = {
    setEmail,
    count,
    email,
    emailValid,
    setCount,
    emailRef,
  };
  return retObject;
}

export default useEmailValidation;
