import {FaLinkedinIn,FaGithub,FaWhatsapp,FaWpforms} from 'react-icons/fa'
import TypewriterComponent from 'typewriter-effect';

export default function Home() {
  return (
    <>
      <div className="w-full relative  h-screen ">
        <video
          className="object-cover brightness-[30%]  h-screen w-full"
          autoPlay={true}
          muted={true}
          loop={true}
          src="https://res.cloudinary.com/dbwc39val/video/upload/v1670660903/myportfolio/mixkit-digital-animation-of-screens-4192-medium_sdjprq.mp4"
        />
        <div className="absolute p-4 w-full space-y-5 h-screen text-center top-0 text-white flex flex-col items-center justify-center">
          <p className="text-[20px]">LET'S BUILD SOMETHING TOGETHER </p>
          <h1 className="md:text-[50px] text-[30px] font-bold">
            Hi, I'm <span className="text-[#00D8FF]">Aditya</span>
          </h1>
          <h1 className="md:text-[50px] text-[30px] text-[#00D8FF] font-bold">
          <TypewriterComponent 
            options={{
              autoStart: true,
              loop: true,
              delay: 70,
              strings: ["A Front-End Web Developer", "Ambitious person.","Able to make responsive Designs.","Open to Learning New Technologies."],
            }}
          /></h1>
          <p className="text-[20px]">
            I’m focused on building responsive front-end web applications
          </p>
          <div className="flex space-x-8 flex-row">
        <a href='https://www.linkedin.com/in/aditya-kaushik-9a836a186/' target='_blank'>  <abbr title="Linkedin"> <button className=" cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-full p-3"><FaLinkedinIn color='white' size={30}/></button></abbr></a> 
        <a href='https://github.com/adityakshk499' target='_blank'>  <abbr title="Github">  <button className="cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF]  text-black rounded-full p-3"><FaGithub color='#433f40' size={30}/></button></abbr> </a> 
        <a href='https://drive.google.com/file/d/1-4et_7JrwE50ptwBl1uw8fYEdp3MTzKx/view?usp=share_link' target='_blank'>  <abbr title="Resume">   <button className="bg-gradient-to-r from-[#006a91] to-[#00D8FF]  text-black rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300"><FaWpforms size={30}/></button></abbr> </a> 
        <a href='https://api.whatsapp.com/send?phone=919897545121' target='_blank'>  <abbr title="Whatsapp">   <button className="cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-full p-3"><FaWhatsapp color='#13eb1e' size={30}/></button></abbr> </a> 
            



          </div>
        </div>
      </div>
    </>
  );
}
