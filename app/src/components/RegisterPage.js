import React from 'react'

const RegisterPage = () => {

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
      <style scoped>
        {styles}
      </style>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'></link>

      <div class="RegisterPage_Screen">
        <h2 class="nonactive"> sign in </h2>

        <h2 class="active"> sign up </h2>

        <form class="RegisterPage_Form">
          <input type="text" class="RegisterPage_text" name="firstname" required/>
          <span class="LoginRegister_Span">first name</span>

          <input type="text" class="RegisterPage_text" name="lastname" required/>
          <span class="LoginRegister_Span">last name</span>

          <input type="text" class="RegisterPage_text" name="id" required/>
          <span class="LoginRegister_Span">id</span>

          <input type="text" class="RegisterPage_text" name="username" required/>
          <span class="LoginRegister_Span">username</span>
          <input type="password" class="RegisterPage_text" name="password" required></input>
          <span class="LoginRegister_Span">password</span>
          
          <br></br>
          <br></br>
          <input type="date" id="bitrh_day" name="birthday" class="RegisterPage_Birthdate" required/>
          
          <button class="RegisterPage_SignupButton">
            Sign Up
          </button>
        
          <h1></h1>

        </form>
      </div>
      
    </div>
  )
}

export default RegisterPage

