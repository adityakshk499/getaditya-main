import React,{useState} from "react";
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'
import Link from "next/link";
import {FaLinkedinIn,FaGithub,FaWhatsapp,FaWpforms} from 'react-icons/fa'


const Navbar = () => {
  const [nav, setnav] = useState(false)
  function navhandler(){
    setnav(!nav)
  }
  function logohandler(){
    setnav(false)
  }
  return (
   <>
    <div
      className="flex bg-black w-full   h-fit justify-between text-[#00D8FF] items-center flex-row  shadow-xl p-5">
      <Link href="/" onClick={logohandler}>
        {" "}
        <img
          className="w-40 md:w-56 h-fit"
          src="https://res.cloudinary.com/dbwc39val/image/upload/v1670688838/myportfolio/Aditya_kaushik-1_ijxnyw.png"
        />
      </Link>
      <div className="lg:flex cursor-pointer  flex-row space-x-12 mx-7 hidden">
        <Link href="/Aboutus" className="hover:scale-125 hover:text-orange-400  ease-in duration-200 text-xl font-semibold">
          About
        </Link>
        <Link href="/Projects" className="hover:scale-125 hover:text-orange-400  ease-in duration-200  text-xl font-semibold">
          Projects
        </Link>
        {/* <Link href="/Certificates" className="hover:scale-125 hover:text-orange-400  ease-in duration-200  text-xl font-semibold">
          Certificates
        </Link> */}
        <Link href="/Contactus" className="hover:scale-125 hover:text-orange-400  ease-in duration-200  text-xl font-semibold">
          Contact
        </Link>
      </div>
      <div className="lg:hidden">
       { nav===false? <FaChevronDown size={30} onClick={navhandler} />: <FaChevronUp size={30} onClick={navhandler}/>}
      </div>
     
    </div>
    
    <div className={nav===true?"z-10 flex lg:hidden pt-10 flex-col px-8   space-y-10  items-center h-full bg-black fixed text-[#00D8FF] top-[70px] w-full text-center":'hidden'}>
        
       <Link onClick={navhandler} href="/Aboutus" className="text-4xl border-b-2 w-full pb-2 font-semibold">
          About
        </Link>
          <Link onClick={navhandler} href="/Projects" className="text-4xl border-b-2 w-full pb-2 font-semibold">
          Projects
        </Link>
        {/* <button className="bg-yellow-400 p-4 w-[90%] text-black rounded-[20px]">    <Link onClick={navhandler} href="/Certificates" className="text-4xl font-semibold">
          Certificates
        </Link></button> */}
           <Link onClick={navhandler} href="/Contactus" className="border-b-2 w-full pb-2 text-4xl font-semibold">
          Contact
        </Link>
        <div className="flex w-full items-center justify-around flex-row">
        <a href='https://www.linkedin.com/in/aditya-kaushik-9a836a186/' target='_blank'>  <abbr title="Linkedin"> <button className=" cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-full p-3"><FaLinkedinIn color='white' size={30}/></button></abbr></a> 
        <a href='https://github.com/adityakshk499' target='_blank'>  <abbr title="Github">  <button className="cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF]  text-black rounded-full p-3"><FaGithub color='#433f40' size={30}/></button></abbr> </a> 
        <a href='https://drive.google.com/file/d/1-4et_7JrwE50ptwBl1uw8fYEdp3MTzKx/view?usp=share_link' target='_blank'>  <abbr title="Resume">   <button className="bg-gradient-to-r from-[#006a91] to-[#00D8FF]  text-black rounded-full p-3 cursor-pointer hover:scale-110 ease-in duration-300"><FaWpforms size={30}/></button></abbr> </a> 
        <a href='https://api.whatsapp.com/send?phone=919897545121' target='_blank'>  <abbr title="Whatsapp">   <button className="cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-full p-3"><FaWhatsapp color='#13eb1e' size={30}/></button></abbr> </a>  
         



          </div>
        
      </div>
    </>
  );
};

export default Navbar;
