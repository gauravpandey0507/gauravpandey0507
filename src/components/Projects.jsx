import React from "react";
import New1Image from './ecommerce-Website-Project 1.webp';
import New2Image from './protofolio.webp';
const Projects = () => {
  return (
    <div style={{background:'yellow'}}>
      <h1>My Projects</h1>
      <ul>
        <li>Project 1: E-commerce Website</li>
        <img src={New1Image} alt="ecommerce-Website-Project 1.webp" style={{width:'700px',}}/> 
        <p>Welcome to [My Website Name Ecommerce] – Your one-stop destination for amazing deals and a seamless shopping experience!  
Discover top-quality products across categories like fashion, electronics, home essentials, and more – all at unbeatable prices.  
Shop now and enjoy fast delivery, secure payments, and exceptional customer support.  
 </p>   <br />  <br />  <br />
        <li>Project 2: Portfolio Website</li>

        <img src={New2Image} alt="protofolio.web" style={{width:'500px',}}/>
        <p> Hello, I'm Gaurav Pandey – a passionate software engineer and aspiring full-stack developer.  
With a strong foundation in programming and problem-solving, I specialize in building scalable and user-friendly web applications.  
Currently, I am mastering full-stack Java development to enhance my technical expertise and deliver impactful solutions.
</p>   <br /> <br /> <br />
        
      </ul>
    </div>
  );
};

export default Projects;

