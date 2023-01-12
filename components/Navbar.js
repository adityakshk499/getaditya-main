import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaWpforms } from "react-icons/fa";
import Buttonrounded from "./Buttonrounded";
import Image from "next/image";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  function navhandler() {
    setnav(!nav);
  }
  function logohandler() {
    setnav(false);
  }
  return (
    <>
      <div className="flex shadow-cyan-900 bg-black w-full fixed top-[0] z-10  h:[50px] sm:h-[80px] justify-between text-[#00D8FF] items-center flex-row  shadow-sm p-3 md:p-5">
        <Link href="/" onClick={logohandler}>
          {" "}
          <Image
            className="w-32 sm:w-48 h-fit"
            width={150}
            height={100}
            src="https://res.cloudinary.com/dbwc39val/image/upload/v1670688838/myportfolio/Aditya_kaushik-1_ijxnyw.png"
            alt="logo"
          />
        </Link>
        <div className="lg:flex cursor-pointer  flex-row space-x-12 mx-7 hidden">
          <Link
            href="/Aboutus"
            className="hover:scale-125 hover:text-cyan-600  ease-in duration-200 text-xl font-semibold"
          >
            About
          </Link>
          <Link
            href="/Projects"
            className="hover:scale-125 hover:text-cyan-600  ease-in duration-200  text-xl font-semibold"
          >
            Projects
          </Link>
          {/* <Link href="/Certificates" className="hover:scale-125 hover:text-orange-400  ease-in duration-200  text-xl font-semibold">
          Certificates
        </Link> */}
          <Link
            href="/Contactus"
            className="hover:scale-125 hover:text-cyan-600  ease-in duration-200  text-xl font-semibold"
          >
            Contact
          </Link>
        </div>
        <div className="lg:hidden">
          {nav === false ? (
            <FaChevronDown size={25} onClick={navhandler} />
          ) : (
            <FaChevronUp size={25} onClick={navhandler} />
          )}
        </div>
      </div>

      <div
        className={
          nav === true
            ? "z-10 flex lg:hidden pt-10 flex-col px-8   space-y-10  items-center h-full bg-black fixed text-[#00D8FF] top-[49.5px] sm:top-[81px]  w-full text-center"
            : "hidden"
        }
      >
        <Link
          onClick={navhandler}
          href="/Aboutus"
          className="text-4xl border-b-2 w-full pb-2 font-semibold"
        >
          About
        </Link>
        <Link
          onClick={navhandler}
          href="/Projects"
          className="text-4xl border-b-2 w-full pb-2 font-semibold"
        >
          Projects
        </Link>
        {/* <button className="bg-yellow-400 p-4 w-[90%] text-black rounded-[20px]">    <Link onClick={navhandler} href="/Certificates" className="text-4xl font-semibold">
          Certificates
        </Link></button> */}
        <Link
          onClick={navhandler}
          href="/Contactus"
          className="border-b-2 w-full pb-2 text-4xl font-semibold"
        >
          Contact
        </Link>
        <div className="flex w-full items-center justify-around flex-row">
        <Buttonrounded link={'https://www.linkedin.com/in/aditya-kaushik-9a836a186/'} title={'Linkedin'}>
              <FaLinkedinIn color="white" size={25} />
            </Buttonrounded>
            <Buttonrounded link={'https://github.com/adityakshk499'} title={'Github'}>
              <FaGithub color="#433f40" size={25} />
            </Buttonrounded>
            <Buttonrounded link={'https://drive.google.com/file/d/1-4et_7JrwE50ptwBl1uw8fYEdp3MTzKx/view?usp=share_link'} title={"Resume"}>
              <FaWpforms color="black" size={25} />
            </Buttonrounded>
            <Buttonrounded link={'https://api.whatsapp.com/send?phone=919897545121'} title={'Whatsapp'}> 
              <FaWhatsapp  color="#13eb1e" size={25} />
            </Buttonrounded>
        </div>
      </div>
    </>
  );
};

export default Navbar;
