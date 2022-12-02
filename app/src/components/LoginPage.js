import React from 'react'

const LoginPage = () => {
  // const primaryStyle = {position:'relative',top:100,textAlign:'center'}
  // return (
  //   <div>
  //     <div className='clear_screen'></div>

  //     <div style={primaryStyle}>

  //       <div style={{position:'relative',left:100,top:50}}>
  //         <div className='person_pic'></div>
  //       </div>

  //       <div style={{position:'relative',bottom:150}}> 
  //         <label htmlFor="uname"><b>Username</b></label>
  //         <br></br>
  //         <input type="text" placeholder='Enter Username' name='uname' required/>
  //         <br></br>
  //         <label htmlFor="psw"><b>Password</b></label>
  //         <br></br>
  //         <input type="password" placeholder='Enter Password' name='psw' required/>
  //         <br></br>
  //         <button type='submit'>Login</button>

  //         <label style={{fontSize:10}}>
  //           <input type="checkbox" name='remember'/> Remember me
  //         </label>
  //       </div>

  //     </div>

  //   </div>
  // )
  return (
    <div>
      
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'></link>

      <div class="login">
        <h2 class="active"> sign in </h2>

        <h2 class="nonactive"> sign up </h2>

        <form class="login_form">

          <input type="text" class="text" name="username"/>

          <span>username</span>
    
          <br></br>
          <br></br>

          <input type="password" class="text" name="password"></input>
          <span>password</span>
          <br></br>

          <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />

          <label for="checkbox-1-1">Keep me Signed in</label>

          <button class="signin">
            Sign In
          </button>
        
          <h1></h1>
          <a href="#" class="forgot_password_link">Forgot Password?</a>

        </form>
      </div>
      
    </div>
  )
}

export default LoginPage