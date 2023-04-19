import React, { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const Register = () => {
  const getToken = cookies.get("token");
  if (getToken) {
    window.location.href = "/";
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (e) => {
    window.scrollTo(0, 150);
    e.preventDefault();
    const newEntry = { firstName: name, email: email, password: password };
    var url = "http://localhost:3000/api/v1/auth/register";

    axios
      .post(url, newEntry)
      .then((response) => {
        if (response.data.data.token) {
          cookies.set("token", response.data.data.token, { path: "/" });
          localStorage.setItem('jwt', response.data.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.data))
          window.location.href = "/";
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrors(error?.response?.data?.data);
        }
      });
  };

  return (
    <div>
      <section className="registration">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="registration-box">
                <div className="reg-top">
                  <h3 className="">Create An Account.</h3>
                  {errors && errors.length > 0
                    ? errors.map((answer, i) => {
                        return (
                          <div className="mt-3">
                            {" "}
                            <div className="alert alert-danger text-center">
                              {answer}
                            </div>
                          </div>
                        );
                      })
                    : null}
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                </div>
                <form onSubmit={submitForm} className="reg-form" action="#">
                  <div className="row">
                    <div className="col-md-6 name">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name here"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                      />
                    </div>
                    <div className="col-md-6 srname">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="srname"
                        placeholder="Enter phone number here"
                      />
                    </div>
                    <div className="col-md-12 email">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter Email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                      />
                    </div>
                    <div className="col-md-12 password">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 chqbox">
                      <input type="checkbox" name="terms" id="rc-email" />
                      <label htmlFor="rc-email">
                        Yes, I want to receive emails.
                      </label>
                    </div>
                    <div className="col-md-12 chqbox chqbox2">
                      <input type="checkbox" name="terms" id="term" />
                      <label htmlFor="term">
                        I have read &amp; agree with{" "}
                        <span>Terms &amp; Conditions</span>.
                      </label>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" name="button">
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>
                <div className="login-btm text-center">
                  <p>
                    Already have an account ?<a href="/login">Log in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Register;
