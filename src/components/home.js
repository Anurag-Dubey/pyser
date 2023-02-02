import React from "react";
import Navv from "./Navv";

function Home({setLoginUser}) {
  return (
    <>
    <Navv setLoginUser={setLoginUser}/>
    <div style={{ marginTop: "25px" }}>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
        <form  className="col-8 ">
          <div className="form-group row" style={{ marginTop: "10px" }}>
            <label for="inputName" className="col-sm-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputText3"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="form-group row" style={{ marginTop: "10px" }}>
            <label  className="col-sm-2 col-form-label">
              About Us:
            </label>
            <div className="col-sm-6">
              <textarea
                type="text"
                className="form-control"
                id="inputText3"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div className="form-group row" style={{ marginTop: "10px" }}>
            <label for="inputName" className="col-sm-2 col-form-label">
              Designation:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputText3"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div className="form-group row" style={{ marginTop: "10px" }}>
            <label for="inputName" className="col-sm-2 col-form-label">
              Job:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputText3"
                placeholder="Job Title"
              />
            </div>
          </div>

          <div className="form-group row" style={{ marginTop: "10px" }}>
            <label for="inputName" className="col-sm-2 col-form-label">
              Country:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputText3"
                placeholder="Country Name"
              />
            </div>
          </div>

          <div className="form-group row" style={{ marginTop: "10px" }}>
            <label className="col-sm-2" for="exampleFormControlFile1">
              Upload Photo
            </label>
            <div className="col-sm-6">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
    </>
  );
}

export default Home;
