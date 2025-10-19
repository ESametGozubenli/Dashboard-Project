import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/sign-up.css";
import "../styles/auth-shared.css";


import { ReactComponent as DashIcon } from "../../assets/icons/dashboard-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as SignUpIcon } from "../../assets/icons/signup.svg";
import { ReactComponent as SignInIcon } from "../../assets/icons/signin.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";

import signImg from "../../assets/images/sign-up-img.png";

function SignUp() {
  const savedData = JSON.parse(localStorage.getItem("rememberMeData"));

  const navigate = useNavigate();

  const initialValues = {
    name: savedData?.name || "",
    email: savedData?.email || "",
    password: savedData?.password || "",
    rememberMe: savedData?.rememberMe || false,
  };
  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email("Please enter a valid email address"),
    password: Yup.string(),
  });

  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>
            <DashIcon className="icon" /> DASHBOARD
          </button>
          <button onClick={() => navigate("/")}>
            <ProfileIcon className="icon" /> PROFILE
          </button>
          <button onClick={() => navigate("/Sign-Up")}>
            <SignUpIcon className="icon" /> SIGN UP
          </button>
          <button onClick={() => navigate("/")}>
            <SignInIcon className="icon" /> SIGN IN
          </button>
        </div>
        <div className="download-btn">
          <button>Free Download</button>
        </div>
      </nav>
      <div className="container">
        <div className="img-container">
          <div className="img-items">
            <p className="item-1">INSPIRED BY THE FUTURE:</p>
            <p className="item-2">THE VISION UI DASHBOARD</p>
          </div>
        </div>
        <div className="form-container">
          <div className="form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                if (values.rememberMe) {
                  localStorage.setItem(
                    "rememberMeData",
                    JSON.stringify(values)
                  );
                } else {
                  localStorage.removeItem("rememberMeData");
                }
                console.log("Form submitted:", values);
                setSubmitting(false);
              }}
            >
              <Form>
                <div className="form-header">
                  <h1>Welcome!</h1>
                  <p>
                    Use these awesome forms yo login or create new account in
                    your project for free.
                  </p>
                </div>
                <div className="create-acount">
                  <div className="register-container">
                    <h3>Register with</h3>

                    <div className="registers">
                      <button className="register-box">
                        <FacebookIcon />
                      </button>
                      <button className="register-box">
                        <AppleIcon />
                      </button>
                      <button className="register-box">
                        <GoogleIcon />
                      </button>
                    </div>
                    <p>or</p>
                  </div>
                  <div className="form-input">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <div className="input-container">
                      <Field
                        type="name"
                        name="name"
                        placeholder="Your full name "
                      />
                      <ErrorMessage name="name" component="div" />
                    </div>
                  </div>

                  <div className="form-input">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-container">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Your email address "
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>

                  <div className="form-input">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-container">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Your Password"
                      />
                      <ErrorMessage name="password" component="div" />
                    </div>
                  </div>

                  <div className="form-checkbox">
                    <label class="switch">
                      <Field type="checkbox" name="rememberMe" />
                      <span className="slider"></span>
                    </label>
                    <p>Remember Me</p>
                  </div>
                  <div className="form-button">
                    <button type="submit">SIGN UP</button>
                  </div>
                  <div className="form-signIn-link">
                    Already have an account? <Link to="/">Sign in</Link>
                  </div>
                </div>
              </Form>
            </Formik>
            <div className="form-footer">
              <ul>
                <li>
                  <a href="#">Marketplace</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
