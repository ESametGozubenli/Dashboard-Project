import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/sign-in.module.css";
import "../styles/auth-shared.css";

import { ReactComponent as DashIcon } from "../../assets/icons/dashboard-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as SignUpIcon } from "../../assets/icons/signup.svg";
import { ReactComponent as SignInIcon } from "../../assets/icons/signin.svg";

function SignIn() {
  const savedData = JSON.parse(localStorage.getItem("rememberMeData"));
  const navigate = useNavigate();

  const initialValues = {
    email: savedData?.email || "",
    password: savedData?.password || "",
    rememberMe: savedData?.rememberMe || false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address"),
    password: Yup.string(),
  });

  return (
    <div>
      <nav className={styles["nav-bar"]}>
        <div className={styles["nav-buttons"]}>
          <button onClick={() => navigate("/")}>
            <DashIcon className={styles.icon} /> DASHBOARD
          </button>
          <button onClick={() => navigate("/")}>
            <ProfileIcon className={styles.icon} /> PROFILE
          </button>
          <button onClick={() => navigate("/Sign-Up")}>
            <SignUpIcon className={styles.icon} /> SIGN UP
          </button>
          <button onClick={() => navigate("/")}>
            <SignInIcon className={styles.icon} /> SIGN IN
          </button>
        </div>
        <div className={styles["download-btn"]}>
          <button>Free Download</button>
        </div>
      </nav>

      <div className={styles.container}>
        <div className={styles["img-container"]}>
          <div className={styles["img-items"]}>
            <p className={styles["item-1"]}>INSPIRED BY THE FUTURE:</p>
            <p className={styles["item-2"]}>THE VISION UI DASHBOARD</p>
          </div>
        </div>

        <div className={styles["form-container"]}>
          <div className={styles.form}>
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
                <div className={styles["form-header"]}>
                  <h1>Nice to see you!</h1>
                  <p>Enter your email and password to sign in</p>
                </div>

                <div className={styles["form-input"]}>
                  <label htmlFor="email" className={styles["form-label"]}>
                    Email
                  </label>
                  <div className={styles["input-container"]}>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your email address"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                </div>

                <div className={styles["form-input"]}>
                  <label htmlFor="password" className={styles["form-label"]}>
                    Password
                  </label>
                  <div className={styles["input-container"]}>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>

                <div className={styles["form-checkbox"]}>
                  <label className={styles.switch}>
                    <Field type="checkbox" name="rememberMe" />
                    <span className={styles.slider}></span>
                  </label>
                  <p>Remember Me</p>
                </div>

                <div className={styles["form-button"]}>
                  <button type="submit">SIGN IN</button>
                </div>

                <div className={styles["form-signUp-link"]}>
                  Don't have an account? <Link to="/Sign-Up">Sign up</Link>
                </div>
              </Form>
            </Formik>

            <div className={styles["form-footer"]}>
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

export default SignIn;
