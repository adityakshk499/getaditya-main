import React from "react";

const Buttonrounded = ({ link, title, children }) => {
  return (
    <>
      <a href={link} target="_blank">
        {" "}
        <abbr title={title}>
          {" "}
          <button className=" cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-full p-3">
            {children}
          </button>
        </abbr>
      </a>
    </>
  );
};

export default Buttonrounded;
