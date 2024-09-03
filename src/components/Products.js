
import React from "react"
import one from "../assets/images/perfume1.jpg"
import two from "../assets/images/perfume2.jpg"
import three from "../assets/images/perfume3.jpg"



function Products(){
    return(
      <div class="Products"> 
      <div class="box1">
          <img src={one}  alt="one" ></img>
              <p>Lorem ipsum dolor sit amet consectetur </p>        </div>
  
  
   <div class="box1">
          <img src={two} alt="two"></img>
              <p>Lorem ipsum dolor sit amet consectetur </p>        </div>
  
  <div class="box1">
          <img src={three} alt="three"></img>
              <p>Lorem ipsum dolor sit amet consectetur </p>        </div>
  </div>
   )
  }

  export default Products