import React from "react";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaWpforms,
  FaPhoneAlt,
} from "react-icons/fa";
import Buttonrounded from "./Buttonrounded";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row  w-full md:w-fit rounded-lg p-4  shadow-sm  shadow-blue-400 fixed z-10   bg-black  justify-between items-center gap-8 ">
          <Buttonrounded
            link={"https://www.linkedin.com/in/aditya-kaushik-9a836a186/"}
            title={"Linkedin"}
          >
            <FaLinkedinIn color="white" size={20} />
          </Buttonrounded>
          <Buttonrounded
            link={"https://github.com/adityakshk499"}
            title={"Github"}
          >
            <FaGithub color="white" size={20} />
          </Buttonrounded>
          <Buttonrounded
            link={
              "https://drive.google.com/file/d/1-4et_7JrwE50ptwBl1uw8fYEdp3MTzKx/view?usp=share_link"
            }
            title={"Resume"}
          >
            <FaWpforms color="white" size={20} />
          </Buttonrounded>

          <Buttonrounded
            link={"tel:9897545121"}
            title={"Call"}
          >
            <FaPhoneAlt color="white" size={20} />
          </Buttonrounded>

          <Buttonrounded
            link={"https://api.whatsapp.com/send?phone=919897545121"}
            title={"Whatsapp"}
          >
            <FaWhatsapp color="white" size={20} />
          </Buttonrounded>
        </div>
      </div>
    </>
  );
};

export default Navbar;
