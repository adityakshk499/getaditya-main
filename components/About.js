import React from "react";
import {SiTailwindcss,SiHtml5,SiCss3,SiJavascript,SiReact, SiExpress , SiMongodb} from "react-icons/si"
import Card from "../components/Card";
import TextGradient from "./TextGradient";

import { FaNode } from "react-icons/fa"
const About = () => {
  return (
    <>
       
  
    <div className=" bg-black   w-full h-fit text-white  px-4 sm:px-16 ">

      <div className='flex flex-col  gap-10   '>
        <h1 className="text-[30px] md:text-[40px] border-b-2 text-white bold">ABOUT</h1>
       <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
       <div>
        <TextGradient>Who I Am ?</TextGradient>
        <h3 className="text-[15px] md:text-[20px] font-thin">
          I am ambitious and driven. I thrive on challenge and constantly set
          goals for myself, so I have something to strive towards. I’m not
          comfortable with settling, and I’m always looking for an opportunity
          to do better and achieve greatness.I am passionate about my work.
          Because I love what I do, I have a steady source of motivation that
          drives me to do my best I specialize in building mobile responsive
          front-end UI applications that connect with API’s . I’m passionate
          about learning new technologies and understand there is more than one
          way to accomplish a task. Though I am most proficient in building
          front-end applications using HTML, CSS, Javascript, and React, I am a
          quick learner. I believe that being a great developer is not using one
          specific language, but choosing the best tool for the job. I started
          web developement in 2022. In my spare time I went to gym to keep my self fit.
        </h3>
        </div>
        {/* <TextGradient>Skills</TextGradient> */}
        {/* <div className="grid  grid-cols-3 gap-6 lg:grid-cols-6 lg:gap-10 w-full mb-5"> */}
        <div className=" grid-cols-4 grid">
            <Card><SiHtml5 className="mt-2 " color="#eb8740" size={40}/> <p>  HTML </p> </Card>
            <Card><SiCss3 className="mt-2 "  color="#004CE8" size={40}/> <p>  CSS </p> </Card>
            <Card><SiJavascript className="mt-2 "  color="#ffd600" size={40}/> <p>  Javascript </p> </Card>
            <Card><SiTailwindcss className="mt-2 "  color="#06b6d4" size={40}/> <p>  Tailwind </p> </Card>
            <Card><SiReact className="mt-2 "  color="#61dbfb" size={40}/><p>  React </p> </Card>
            <Card><SiExpress className="mt-2 "  color="white" size={40}/><p>  Express </p> </Card>
            <Card><FaNode className="mt-2 "  color="green" size={40}/><p>  Node.Js </p> </Card>
            <Card><SiMongodb className="mt-2 "  color="yellow" size={40}/><p>  MongoDb </p> </Card>

         


        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
