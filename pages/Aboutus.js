import React from "react";
import {SiTailwindcss,SiHtml5,SiCss3,SiJavascript,SiReact,SiBootstrap} from "react-icons/si"
import Card from "../components/Card";
import Head from "next/head";

const Aboutus = () => {
  return (
    <>
        <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"
        />
        <title>About</title>
      </Head>
  
    <div className=" bg-black top-[80px] relative  w-full min-h-screen text-white p-3 pb-2   md:p-16  ">

      <div className='flex flex-col  space-y-10   '>
        <h1 className="text-[40px] border-b-2 text-[#006a91] bold">ABOUT</h1>
        <h2 className="text-[35px] text-[#00D8FF] font-semibold">Who I Am :</h2>
        <h5 className="text-[22px] font-thin">
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
        </h5>
        <h2 className='text-[35px] text-[#00D8FF] font-semibold'>Skills :</h2>
        <div className="grid  grid-cols-3 gap-6 lg:grid-cols-6 lg:gap-10 w-full mb-5">
            <Card><SiHtml5 className="mt-2 " color="#eb8740" size={40}/> <p>  HTML </p> </Card>
            <Card><SiCss3 className="mt-2 "  color="#004CE8" size={40}/> <p>  CSS </p> </Card>
            <Card><SiJavascript className="mt-2 "  color="#ffd600" size={40}/> <p>  Javascript </p> </Card>
            <Card><SiTailwindcss className="mt-2 "  color="#06b6d4" size={40}/> <p>  Tailwind </p> </Card>
            <Card><SiReact className="mt-2 "  color="#61dbfb" size={40}/><p>  React </p> </Card>
            <Card><SiBootstrap className="mt-2 "  color="#7912f8" size={40}/><p>  Bootstrap </p> </Card>
            

         


        </div>
      </div>
    </div>
    </>
  );
};

export default Aboutus;
