import React from 'react'
import { ReactDOM } from 'react';


const HomePageTest = () => {
  
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close(name) {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";

  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');

  const buttons = [btn1,btn2,btn3,btn4]
  const button_names=['btn1','btn2','btn3','btn4']
  for (let i = 0; i < buttons.length; i++) {
    if(button_names[i]==name){
      buttons[i].style.backgroundColor = 'white';
      buttons[i].style.color = 'black';
    }else{
      buttons[i].style.color='white';
      buttons[i].style.background = "#c8a970";
    }
  }

}


// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

const styles = `
  body,h1,h2,h3,h4,h5 {
    font-family: "Poppins", sans-serif
  }

  body {
    font-size:16px;
  }

  .w3-half img{
  margin-bottom:-6px;margin-top:16px;opacity:0.8;cursor:pointer
  }
  .w3-half img:hover{
    opacity:1
  }

`;
  
function hello(){
  const root = ReactDOM.createRoot(document.getElementById('register_page'));
  // alert("yessssssssssss")
  root.render(
    <React.StrictMode>
    <h1>YESSSSS</h1>
  </React.StrictMode>
  );

}
  return (
    <div>

      <style scoped>
        {styles}
      </style>
      {/* Sidebar/menu */}
      <nav class="w3-sidebar w3-mycolor w3-collapse w3-top w3-large w3-padding style1" id="mySidebar">
        <br></br>
        <a href="javascript:void(0)" onClick={()=>w3_close('1')} class="w3-button w3-hide-large w3-display-topleft style2">Close Menu</a>
        <div class="w3-container">
          <h3 class="w3-padding-64"><b>𝑀𝒶𝓉𝒽𝑒𝓂𝒶𝓉𝒾𝒸𝒳<br></br></b></h3>
        </div>
        <div class="w3-bar-block">
          <a href="#" onClick={()=>w3_close('btn1')} class="w3-bar-item w3-button w3-hover-white w3-click-white" id="btn1">Home</a> 
          <a href="#commonquestions" onClick={()=>w3_close('btn2')} class="w3-bar-item w3-button w3-hover-white w3-click-white" id="btn2">Common questions</a> 
          <a href="html/login.html" onClick={()=>w3_close('btn3')} class="w3-bar-item w3-button w3-hover-white w3-click-white" id="btn3">Login</a> 
          <a href="html/register.html" onClick={()=>hello()} class="w3-bar-item w3-button w3-hover-white w3-click-white" id="btn4">Register</a> 
        </div>
      </nav>

        {/* Top menu on small screens */}
      <header class="w3-container w3-top w3-hide-large w3-mycolor w3-xlarge w3-padding">
        <a href="javascript:void(0)" class="w3-button w3-mycolor w3-margin-right" onClick={w3_open}>☰</a>
        <span>𝑀𝒶𝓉𝒽𝑒𝓂𝒶𝓉𝒾𝒸𝒳</span>
      </header>



       {/* Overlay effect when opening sidebar on small screens */}
       <div class="w3-overlay w3-hide-large" onClick={()=>w3_close('2')} style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>

       {/* PAGE CONTENT */}
      <div class="w3-main style4">
          {/* Header */}
        <div class="w3-container" style={{marginTop:80}}>
          <h1 class="w3-jumbo"><b>Welcome to MathematicX</b></h1>

          <br></br>
          <br></br>
          <h1 class="w3-xxxlarge w3-text-mycolor"><b style={{fontSize:40}}>About us</b></h1>
          <p>MathematicX is an Education tool for teachers that encourage creativity in students by letting them the option to create math problems of their own. MathematicX can help the teacher to monitor the improvement progress of the students. In addition, MathematicX can help the students to improve their math skills by generating them the questions they failed answer with different data.</p>
        </div>

      
      {/* Common questions */}
      <div class="w3-container" id="commonquestions" style={{marginTop:75}}>
        <h1 class="w3-xxxlarge w3-text-mycolor"><b style={{fontSize:40}}>Common questions</b></h1>
        <p> Here you will see the most popular questions in our website</p>
      </div>


      </div>

      
    </div>
    
  )
}

export default HomePageTest