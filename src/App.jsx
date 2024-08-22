import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Course from "./pages/Course"
import Navigation from "./components/Navigation"
import AboutCourse from "./pages/AboutCourse"
import Signin from "./pages/Signin"
import Signup from "./pages/authorization/Signup"
import Cart from "./pages/Cart"


function App() {


  return (
  <BrowserRouter>
    <Navbar/>
    {/* <Navigation/> */}
  <Routes>
<Route path="/" element={<Course/>}/>
<Route path="/course" element={<AboutCourse/>}/>
<Route path="/login" element={<Signin/>}/>
<Route path="/register" element={<Signup/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="*" element={<><h1>page not found</h1></>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
