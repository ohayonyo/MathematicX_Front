import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <div id="login_page">
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'></link>

      <div className='LoginPage_Screen'>
        <h2 className='active h2' style={{fontWeight:400,color:'white'}}> sign in </h2>

        <h2 className='nonactive h2'> <a href="/register" style={{textDecoration:'none'}}>sign up</a></h2>

        <form className='LoginPage_Form' action="/teacherMenu">

          <input type="text" className='LoginPage_text' name="username" required/>

          <span className='LoginRegister_Span text_span'>username</span>
    
  
          <input type="password" className='LoginPage_text' name="password" required></input>
          <span className='LoginRegister_Span text_span'>password</span>
          <br></br>

          <div className='keep_me_signed'>
            <input type="checkbox" id="checkbox-1-1" className='LoginPage_RememberMeCheckbox' />
            <label for="checkbox-1-1" className='LoginPage_Label' style={{color:'white'}}>Keep me Signed in</label>
          </div>
          


          <button className='LoginPage_SigninButton'>
            Sign In
          </button>

          <div className='dont_have_an_account'>
            <p style={{color:'white'}}>Don't have an account? <a href="/register">sign up</a></p>
          </div>
          
          <div className='LoginPage_forgotPasswordLink'>
            <a href="#">Forgot Password?</a>
          </div>
          

        </form>
      </div>
      
    </div>
  )
}

export default Login