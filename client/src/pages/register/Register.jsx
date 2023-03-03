import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

  const emailref = useRef();
  const passwordref = useRef();

  const handlestart = () => {
    setEmail(emailref.current.value);
  };

    const handleFinish = () => {
      setPassword(passwordref.current.value)
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginbutton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlmited movies, Tv shows and more.</h1>
        <h2>Watch anywhere. cancel anytime</h2>
        <p>
          Ready to watch ? Enter your email to create or restart your
          membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailref} />
            <button className="registerbutton" onClick={handlestart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordref} />
            <button className="registerbutton" onClick={handleFinish}>
              {" "}
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
