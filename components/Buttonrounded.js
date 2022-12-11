import React from 'react'

const Buttonrounded = ({children}) => {
  return (
  <>
      <a href='https://www.linkedin.com/in/aditya-kaushik-9a836a186/' target='_blank'>  <abbr title="Linkedin"> <button className=" cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#006a91] to-[#00D8FF] text-black rounded-full p-3">{children}</button></abbr></a> 
  </>
  )
}

export default Buttonrounded