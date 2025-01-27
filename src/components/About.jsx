import React from "react";
import NewImage from './gp.jpg';
const About = () => {
  return (
    <div style={{background:'orange'}}>  
<section className="about">  <br /> <br />
                <h2>About Me</h2>
                    <br /> <br />
      <img src={NewImage} alt="gp.jpg" style={{width:'300px',borderRadius:'45%'}}/>
                          <br /> <br />
                <p>I’m a motivated software engineer with a strong foundation in <strong>Java Development</strong> and a keen interest in <strong>full-stack development</strong>. I love solving complex problems and creating seamless user experiences.</p>
                <ul>   <br /> <br />
                    <li><strong>Skills:</strong> Java, MySQL, HTML, CSS, JavaScript, React</li>
                    <li><strong>Learning:</strong> Full-Stack Java Development</li>
                    <li><strong>Certification:</strong> Intermediate Certificate in MySQL (HackerRank)</li>
                </ul>
            </section>
    </div>
  );
};

export default About;

