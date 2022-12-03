import React from 'react'

const LoginPage = () => {
  const styles = `
  body {
    background-color: #d3d3d3;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
  }

  h2 {
    padding-left: 12px;
    font-size: 22px;
    text-transform: uppercase;
    padding-bottom: 5px;
    letter-spacing: 2px;
    display: inline-block;
    font-weight: 100;
  }
  
  h2:first-child {
    padding-left: 0px;
  }

  input[type="text"],
input[type="password"] {
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

input {
  display: inline-block;
  padding-top: 20px;
  font-size: 14px;
}

h2,
.LoginRegister_Span,
.LoginPage_RememberMeCheckbox {
  margin-left: 20px;
}
`;
  return (
    <div>
      {/* <style>
        {styles}
      </style>
       */}
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'></link>

      <div class="LoginPage_Screen">
        <h2 class="active"> sign in </h2>

        <h2 class="nonactive"> sign up </h2>

        <form class="LoginPage_Form">

          <input type="text" class="LoginPage_text" name="username" required/>

          <span class="LoginRegister_Span">username</span>
    
          <br></br>
          <br></br>

          <input type="password" class="LoginPage_text" name="password" required></input>
          <span class="LoginRegister_Span">password</span>
          <br></br>

          <input type="checkbox" id="checkbox-1-1" class="LoginPage_RememberMeCheckbox" />

          <label for="checkbox-1-1" class="LoginPage_Label">Keep me Signed in</label>

          <button class="LoginPage_SigninButton">
            Sign In
          </button>
        
          <h1></h1>
          <a href="#" class="LoginPage_forgotPasswordLink">Forgot Password?</a>

        </form>
      </div>
      
    </div>
  )
}

export default LoginPage