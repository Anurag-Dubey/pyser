import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./style.css";

const Register = () => {

  const history = useNavigate();

  const [ user, setUser] = useState({
      name: "",
      email:"",
      username:"",
      password:"",
      reEnterpassword: ""
  });

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const register = () => {
      const { name, email, username, password, reEnterpassword } = user
      console.log(user)
      if( name && username && email && password && (password === reEnterpassword)){
          axios.post("http://localhost:9000/register", user)
          .then ( res =>
              {
              alert(res.data.message)
              history("/login")
              }
          )
      } else {
          alert("invlid input")
      }
      
  }
  return (
    <div className="container">
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div className="d-flex justify-content-center py-4">
              <a href="index.html" className="logo d-flex align-items-center w-auto">
                <img src="assets/img/logo.png" alt=""/>
                <span className="d-none d-lg-block">NiceAdmin</span>
              </a>
            </div>

            <div className="card mb-3">

              <div className="card-body">

                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                  <p className="text-center small">Enter your personal details to create account</p>
                </div>

                <form className="row g-3 needs-validation" novalidate>
                  <div className="col-12">
                    <label for="yourName" className="form-label">Your Name</label>
                    <input type="text" name="name" value={user.name} onChange={ handleChange } className="form-control" id="yourName" required/>
                    <div className="invalid-feedback">Please, enter your name!</div>
                  </div>

                  <div className="col-12">
                    <label for="yourEmail" className="form-label">Your Email</label>
                    <input type="email" name="email" className="form-control" id="yourEmail" value={user.email} onChange={ handleChange } required/>
                    <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                  </div>

                  <div className="col-12">
                    <label for="yourUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" name="username" className="form-control" id="yourUsername" value={user.username} onChange={ handleChange } required/>
                      <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="yourPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="yourPassword" value={user.password} onChange={ handleChange } required/>
                    <div className="invalid-feedback">Please enter your password!</div>
                  </div>

                  <div className="col-12">
                    <label for="yourPassword" className="form-label">Re-enter Password</label>
                    <input type="password" name="reEnterpassword" className="form-control" id="yourrenteredPassword" value={user.reEnterpassword} onChange={ handleChange } required/>
                    <div className="invalid-feedback">Please re-enter your password!</div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100" onClick={register} >Register Account</button>
                  </div>
                  <button className="btn btn-primary w-100" onClick={() => history("/login")}>Login</button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>

      
    </div>
  )
}

export default Register
