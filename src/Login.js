
import React from "react";
import Home from './Home'

export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    sethasAccount,
    emailError,
    passwordError,
  } = props;
  return <section className="login">

      <div className="loginContainer">  
      <label >username</label>
      <input type="text" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <p className="errorMsg">{emailError}</p>
      <label>password</label>
      <input type="password"
      required
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <p className="errorMsg">{passwordError}</p>
      <div className="btncontainer">
          {hasAccount ? (
              <>
              <button onClick={handleLogin}>sign in</button>
              <p>dont have  an account ? <span onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
              </>
          ):
          (
            <>
            <button onClick={handleSignUp}>sign up</button>
            <p> have  an account ? <span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p>
            </>
          )}
      </div>
      </div>
  </section>;
}
