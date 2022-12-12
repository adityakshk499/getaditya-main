import Head from "next/head";
import React from "react";

import { FaLinkedinIn, FaGithub, FaWhatsapp, FaWpforms } from "react-icons/fa";

import Buttonrounded from "../components/Buttonrounded";

const Contactus = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"
        />
        <title>Contact</title>
      </Head>
      <div className=" bg-black  relative top-[80px]  w-full min-h-screen text-white p-3    md:p-16  ">
        <div className="flex flex-col  space-y-5  ">
          <h1 className="text-[40px] border-b-2 text-[#006a91] bold">
            CONTACT
          </h1>
          <h2 className="text-[35px] text-[#00D8FF] font-semibold">
            Get In Touch
          </h2>

          <div className="flex  flex-col items-center   space-y-8 w-full   md:w-full ">
            {/* <h3 className="text-[30px] text-left text-[#00D8FF] font-semibold ">
            Aditya Kaushik
          </h3>
          <p>Front-End Developer</p> */}
            <form
              action="https://getform.io/f/575ea668-d576-4ef8-9fcd-8de09956fb14"
              
              method="POST"
              encType="multipart/form-data"
              className="flex-col rounded-[10px] shadow-lg shadow-cyan-700 border-cyan-800 border p-3 md:p-10 text-[#00D8FF] w-full px-4 md:w-[40%] flex space-y-5 "
            >
              <label>
                Name:{" "}
                <input
                  name="name"
                  minlength="6"
                  maxlength="20"
                  required
                  className="focus:outline-none w-full text-[#00D8FF]  p-3 bg-gray-800  rounded-lg "
                  type="name"
                />
              </label>
              <label>
                Email:{" "}
                <input
                  name="email"
                  pattern=".+\.com"
                  size="30"
                  required
                  className="focus:outline-none w-full p-3 bg-gray-800 text-[#00D8FF]   rounded-lg "
                  type="email"
                />
              </label>
              <label>
                Subject:{" "}
                <input
                  name="subject"
                  minlength="8"
                  maxlength="28"
                  required
                  className="focus:outline-none w-full bg-gray-800  p-3 rounded-lg text-[#00D8FF] "
                  type="text"
                />
              </label>
              <label>
                Message:{" "}
                <textarea
                  autoCorrect="on"
                  maxLength="300"
                  minLength="25"
                  required
                  className="resize-none focus:outline-none w-full bg-gray-800    p-3 rounded-lg text-[#00D8FF] "
                  name="message"
                  id="message"
                  cols="10"
                  rows="5"
                ></textarea>
              </label>
              <p className="font-light text-center">
                I am available for freelance or full-time positions. Contact me
                and let's talk.
              </p>
              <button className=" cursor-pointer hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-lg p-3 hover:bg-cyan-600">
                Submit
              </button>
            </form>

            <p>CONNECT WITH ME</p>
            <div className="flex space-x-8 pb-5 flex-row">
            <Buttonrounded link={'https://www.linkedin.com/in/aditya-kaushik-9a836a186/'} title={'Linkedin'}>
              <FaLinkedinIn color="white" size={30} />
            </Buttonrounded>
            <Buttonrounded link={'https://github.com/adityakshk499'} title={'Github'}>
              <FaGithub color="#433f40" size={30} />
            </Buttonrounded>
            <Buttonrounded link={'https://drive.google.com/file/d/1-4et_7JrwE50ptwBl1uw8fYEdp3MTzKx/view?usp=share_link'} title={"Resume"}>
              <FaWpforms color="black" size={30} />
            </Buttonrounded>
            <Buttonrounded link={'https://api.whatsapp.com/send?phone=919897545121'} title={'Whatsapp'}> 
              <FaWhatsapp  color="#13eb1e" size={30} />
            </Buttonrounded>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
