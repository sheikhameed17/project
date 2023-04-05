import React, { useState } from "react";
import "./login.css";
import Main from "./Main";


export default function Login1() {

  const[name,setName]=useState(false)

  function handleClick()
  { 
    setName(true);

  }


  return (
    <div>
    {name ? <Main /> :    <div class="login-box">
    <h2>login</h2>
    <form>
      <div class="user-box">
        <input
          type="text"
          name=""
          required=""
          placeholder="Username"
        ></input>
      </div>
      <div class="user-box">
        <input
          type="password"
          name=""
          required=""
          placeholder="Password"
        ></input>
      </div>

      <div class="button">
   
        <button id="submit" href="#"  onClick={handleClick}>SUBMIT
        </button>
       
       
    <form >
        <button id="register" type="submit" >
          Don't have an account ?<a href="#">Register</a>
        </button>
        </form>
      </div>
    </form>
  </div>
   }
    

    </div>
  );
}
