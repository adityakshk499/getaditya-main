import React from "react";

const Buttonrounded = ({ link, title, children }) => {
  return (
    <>
      <a href={link} rel="noreferrer" target="_blank">
        {" "}
        <abbr title={title}>
          {" "}
          <button aria-label={title} title={title} className=" cursor-pointer hover:scale-110 ease-in duration-300 ">
            {children}
            
          </button>
        </abbr>
      </a>
    </>
  );
};

export default Buttonrounded;
