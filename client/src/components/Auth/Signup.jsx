import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  };

  const loading = true;


  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const resetForm = () => {
    setData(initialState);
    setConfirmPass(true);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    // Check if the changed input is the confirm password field
    if (e.target.name === "confirmpass") {
      setConfirmPass(data.password === e.target.value);
    }
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    console.log(e)


  };

  return (
    <div className="m-auto mt-32 border-2 w-[80%] md:w-[50%]">
      {/* Left side */}


      {/* Right form side */}
      <div className="mt-10">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2  justify-center m-auto w-[80%]">
          <button className=" border-2 rounded-lg hover:bg-slate-50 p-3">
            <h1>Continue With Google</h1>
          </button>
          <button className="border-2 rounded-lg hover:bg-slate-50 p-3">
            <h1>Continue With Google</h1>

          </button>
          <button className="border-2 rounded-lg hover:bg-slate-50 p-3">

            <h1>Continue With Google</h1>

          </button>
          </div>
          <div className="mt-5 p-5 ">
            <hr />
          

          </div>
          <h3 className="">
            {isSignUp ? "Register" : "Login"}
          </h3>
          {isSignUp && (
            <div className="flex flex-col justify-center items-center  gap-2 md:flex-row ">
              <input
                required
                type="text"
                placeholder="First Name"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
                className="p-2 border-2 "
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
                className=" p-2 border-2  "
              />
            </div>
          )}

          <div>
            <input
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="p-2 border-2 justify-center"
            />
          </div>
          <div>
            <input
              required
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className=""
            />
   
          </div>

          <div className="flex flex-col-reverse">
            <span
              className=""
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign up"}
            </span>
            <button
              className=""
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
