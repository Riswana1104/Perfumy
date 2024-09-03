
import React from "react"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Contact from "./components/Contact"
import Aboutus from "./components/Aboutus"
import Products from "./components/Products"



function App(){
return(
    <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <Aboutus></Aboutus>
    <Contact></Contact>
  </div>
)
}
export default App


