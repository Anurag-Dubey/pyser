import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = ({setLoginUser}) => {


  const history = useNavigate();

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9000/login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          // localStorage.setItem("user",res.data.user ? true:false)
          console.log(res.data.user)
          history("/")
      })
      .catch(function (error){
        console.log(error)
      })
        
  
  }

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Login to Your Account
                    </h5>
                    <p className="text-center small">
                      Enter your username & password to login
                    </p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate>
                    <div className="col-12">
                      <label for="yourUsername" className="form-label">
                        Email
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="email"
                          name="email"
                          className="form-control" id="yourUsername"
                          value={user.email}
                          onChange={handleChange}
                          placeholder="Enter your Email"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your Email.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control" id="yourPassword"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter your Password"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary w-100" onClick={login}>
                        Login
                      </button>
                      <div>or</div>
                      <button class="btn btn-primary w-100"
                        onClick={() => history("/register")}
                      >
                        Register
                      </button>
                    </div>
                  </form>
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
