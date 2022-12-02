import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'></link>

      <div class="register">
        <h2 class="nonactive"> sign in </h2>

        <h2 class="active"> sign up </h2>

        <form class="register_form">
          <input type="text" class="text" name="firstname"/>
          <span>first name</span>

          <input type="text" class="text" name="lastname"/>
          <span>last name</span>

          <input type="text" class="text" name="id"/>
          <span>id</span>

          <input type="text" class="text" name="username"/>
          <span>username</span>
          <input type="password" class="text" name="password"></input>
          <span>password</span>
          
          <br></br>
          <br></br>
          <input type="date" id="bitrh_day" name="birthday" class="bitrhdate"/>
          
          <button class="signup">
            Sign Up
          </button>
        
          <h1></h1>

        </form>
      </div>
      
    </div>
  )
}

export default RegisterPage

