import React from "react";
import NewImage from './gp.jpg';
const Home = () => {
 
  return (
    <div >
      <h1>Welcome to My Portfolio</h1>
      {/* <img src={NewImage} alt="homepage.jpg" className="w-full h-full bg-cover" height={260} width={260} /> */}
      <p>Hi, I'm a passionate software engineer and full-stack developer.</p>
          <br /> <br />
        <img src={NewImage} alt="gp.jpg" style={{width:'300px',borderRadius:'45%'}}/>

        <br /> <br />
        <h1>Hi, I’m <span>Gaurav Pandey</span> 👋</h1>
                <p>A passionate <strong>Full-Stack Developer</strong> focused on building scalable web applications.</p>
         <p>A portfolio website is a curated online space that showcases your best work. It can be used when applying for jobs or internships, or to share your work with potential collaborators or employers.</p>
    </div>
  );
};

export default Home;

