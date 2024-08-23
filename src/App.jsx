import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Course from "./pages/Course"
import Navigation from "./components/Navigation"
import AboutCourse from "./pages/AboutCourse"
import Signin from "./pages/authorization/Signin"
import Signup from "./pages/authorization/Signup"
import Cart from "./pages/Cart"
import SignupOrg from "./pages/authorization/SignupOrg"
import SigninOrg from "./pages/authorization/SigninOrg"
import ForgotPassword from "./pages/authorization/ForgotPassword"
import EmailSuccess from "./components/authorization/EmailSuccess"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
  <BrowserRouter>
  

  <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
theme="light"

/>


    <Navbar/>
    {/* <Navigation/> */}
  <Routes>
<Route path="/" element={<Course/>}/>
<Route path="/course" element={<AboutCourse/>}/>
<Route path="/login" element={<Signin/>}/>
<Route path="/register" element={<Signup/>}/>
<Route path="/signup-organisation" element={<SignupOrg/>}/>
<Route path="/signin-organisation" element={<SigninOrg/>}/>
<Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/success" element={<EmailSuccess/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="*" element={<><h1>page not found</h1></>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
