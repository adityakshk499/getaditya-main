import React from 'react'

const Card = ({children}) => {
  return (
    <>
            <div className="w-full hover:scale-110 ease-in duration-300 space-y-3 text-center  flex flex-col  items-center justify-center px-3 py-3 rounded-[10px] shadow-md shadow-cyan-800 border-cyan-800 border ">{children}</div>
    </>
  )
}

export default Card