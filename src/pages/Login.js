import React, { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const Login = () => {
  const getToken = cookies.get("token");
  if (getToken) {
    window.location.href = "/";
  }
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const submitForm = (e) => {
    window.scrollTo(0, 150);
    e.preventDefault();
    const newEntry = { email: email, password: password };
    var url = "http://localhost:3000/api/v1/auth/login";
    axios
      .post(url, newEntry)
      .then((response) => {
        if (response.data.data.token) {
          cookies.set("token", response.data.data.token, { path: "/" });
          localStorage.setItem('jwt', response.data.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.data))
          window.location.href = "/";
          // navigate('/');
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
      <section className="login-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-box">
                <div className="login-top">
                  <h3 className="text-center">Enter your login credentials.</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p> */}
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
                </div>
                <form action="" onSubmit={submitForm} className="login-form">
                  <div className="row">
                    <div className="col-md-12 email">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 password">
                      <label>Password</label>
                      <input
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="col-md-12 d-flex justify-content-between">
                      <div className="chqbox">
                        <input type="checkbox" name="rememberme" id="rmme" />
                        <label htmlFor="rmme">Remember Me</label>
                      </div>
                      <div className="forget-btn">
                        <a href="#">Forget Password?</a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" name="button">
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
                <div className="login-btm text-center">
                  <p>or sign in with</p>
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
