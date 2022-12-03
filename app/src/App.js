
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import HomePageTest from "./components/HomePageTest";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


function App() {
  // return (
  //   <>
  //     {/* This is the alias of BrowserRouter i.e. Router */}
  //     <Router>
  //       <Routes>
  //         {/* This route is for home component 
  //         with exact path "/", in component props 
  //         we passes the imported component*/}
  //         <Route exact path="/" component={Header} />
            
  //         {/* This route is for about component 
  //         with exact path "/about", in component 
  //         props we passes the imported component*/}
  //         <Route path="/login" component={LoginPage} />
            
  //         {/* This route is for contactus component
  //         with exact path "/contactus", in 
  //         component props we passes the imported component*/}
  //         <Route path="/register" component={RegisterPage} />
            
  //         {/* If any route mismatches the upper 
  //         route endpoints then, redirect triggers 
  //         and redirects app to home component with to="/" */}
  //         <Navigate to="/" />
  //       </Routes>
  //     </Router>
  //   </>
  // );

  return (
    <div className="App">
      {/* <RegisterPage/> */}
      <HomePageTest/>
      {/* <RegisterPage/> */}

      {/* <HomePageTest/> */}
      {/* <HomePage/> */}
      {/* <LoginPage/>
      <RegisterPage/> */}

    </div>
  );
}

export default App;
